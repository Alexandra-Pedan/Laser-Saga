// import { Showcase } from './modules/sliderThree/Showcase';
// import { Slides } from './modules/sliderThree/Slides';
// import { Cursor } from './modules/sliderThree/Cursor';
import * as THREE from 'three/build/three.module.js';
import { gsap } from 'gsap';

function displacementSlider(opts) {
  const vertex = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
`;

  const fragment = `
    
    varying vec2 vUv;

    uniform sampler2D currentImage;
    uniform sampler2D nextImage;

    uniform float dispFactor;

    void main() {

        vec2 uv = vUv;
        vec4 _currentImage;
        vec4 _nextImage;
        float intensity = 0.3;

        vec4 orig1 = texture2D(currentImage, uv);
        vec4 orig2 = texture2D(nextImage, uv);
        
        _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));

        _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));

        vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

        gl_FragColor = finalTexture;

    }
`;

  const { images } = opts;
  let image;
  const sliderImages = [];

  const { parent } = opts;
  // const img = { width: parent.offsetWidth, height: parent.offsetHeight };
  // const img = images[0].size;
  const renderWidth = Math.max(parent.offsetWidth || 0);
  const renderHeight = Math.max(parent.offsetHeight || 0);
  let currentSlide = 0;
  // const { w: renderW, h: renderH } = getSize(img);

  const renderer = new THREE.WebGLRenderer({
    antialias: false,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x23272a, 1.0);
  renderer.setSize(renderWidth, renderHeight);
  parent.appendChild(renderer.domElement);

  const loader = new THREE.TextureLoader();
  loader.crossOrigin = 'anonymous';
  $('.js-amount-all').html(images.length);
  $('.js-amount-current').html(1);
  images.forEach((img) => {
    image = loader.load(img);
    // image = loader.load( img.getAttribute( 'src' ) + '?v=' + Date.now() );
    image.magFilter = image.minFilter = THREE.LinearFilter;
    image.anisotropy = renderer.capabilities.getMaxAnisotropy();
    sliderImages.push(image);
  });

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x23272a);
  const camera = new THREE.OrthographicCamera(
    renderWidth / -2,
    renderWidth / 2,
    renderHeight / 2,
    renderHeight / -2,
    1,
    1000,
  );

  camera.position.z = 1;

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      dispFactor: { type: 'f', value: 0.0 },
      currentImage: { type: 't', value: sliderImages[0] },
      nextImage: { type: 't', value: sliderImages[1] },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    opacity: 1.0,
  });

  const geometry = new THREE.PlaneBufferGeometry(parent.offsetWidth, parent.offsetHeight, 1);
  const object = new THREE.Mesh(geometry, mat);
  object.position.set(0, 0, 0);
  scene.add(object);

  const addEvents = function () {
    let isAnimating = false;
    $('.js-btn-slider__next').on('click', () => {
      currentSlide + 1 === images.length ? changeSlide(0) : changeSlide(currentSlide + 1);
    });
    $('.js-btn-slider__prev').on('click', () => {
      currentSlide === 0 ? changeSlide(images.length - 1) : changeSlide(currentSlide - 1);
    });
    function changeSlide(next) {
      if (!isAnimating) {
        $('.js-amount-current').html(next + 1);
        currentSlide = next;
        isAnimating = true;
        mat.uniforms.nextImage.value = sliderImages[next];
        mat.uniforms.nextImage.needsUpdate = true;
        gsap.to(mat.uniforms.dispFactor, 1, {
          value: 1,
          ease: 'Expo.easeInOut',
          onComplete() {
            mat.uniforms.currentImage.value = sliderImages[next];
            mat.uniforms.currentImage.needsUpdate = true;
            mat.uniforms.dispFactor.value = 0.0;
            isAnimating = false;
          },
        });
      }
    }
  };

  addEvents();
  window.locoScroll && window.locoScroll.update();
  window.addEventListener('resize', (e) => {
    updateSizeCanvas(parent);
  });

  function updateSizeCanvas(parent) {
    renderer.setSize(parent.offsetWidth, parent.offsetHeight);
  }

  const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
}

export default function initCustomSlider(container) {
  if (window.location.hostname === 'localhost') {
    $.ajax('/dist/static/configSlide.JSON').done((response) => {
      const conf = {
        parent: container,
        images: response,
      };
      displacementSlider(conf);
    });
  } else {
    $.ajax({
      url: '/wp-admin/admin-ajax.php',
      method: 'POST',
      data: { action: 'viewSlider' },
    }).done((response) => {
      if (!response) {
        container.parser.style.display = 'none';
        console.error('нет данных картинок');
        return;
      }
      const images = JSON.parse(response);
      const conf = {
        parent: container,
        images,
      };

      displacementSlider(conf);
    });
  }
}
