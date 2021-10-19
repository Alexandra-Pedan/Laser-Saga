$(window).resize(() => {
  window.locoScroll.update();
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
});
document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

const swiper = new Swiper('.mySwiper', {
  loop: true,
  effect: 'custom',

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.mynews-swiper', {
  slidesPerView: 2.5,
  spaceBetween: 30,
  slidesPerView: 'auto',
  breakpoints: {
    320: {
      spaceBetween: 10,
    },
    576: {
      spaceBetween: 30,
    },
    1440: {
      spaceBetween: 40,
    },
  },
});

const swiper3 = new Swiper('.mySwiperProject', {
  slidesPerView: 'auto',
  slidesPerView: 1.5,
  spaceBetween: 10,
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const menuContainer = document.querySelector('.js-menu-container');
const menuClose = document.querySelector('.js-menu-close');
const menuOpen = document.querySelector('.js-menu-open');
menuOpen.addEventListener('click', () => {
  if (menuContainer.classList.contains('active')) return;
  document.querySelector('body').style.overflow = 'hidden';
  menuContainer.classList.add('active');
});

menuClose.addEventListener('click', () => {
  if (!menuContainer.classList.contains('active')) return;
  menuContainer.classList.remove('active');
  document.querySelector('body').style.overflow = 'auto';
});

const buttonUp = document.querySelector('.js-btn-up');
if (buttonUp) {
  buttonUp.addEventListener('click', () => {
    window.locoScroll.scrollTo(0);
  });
}

// form
const callbackForm = document.querySelector('.contact-form');
const feedbackForm = document.querySelector('.feedback-form');
const requestReceivedModal = document.querySelector('.form-gratitude');
const btn = document.querySelector('.form-button-js');
const btnForm = document.querySelectorAll('.button-js');
const userPhone = document.querySelector('#callback-form-input-phone');
const userPhoneForm = document.querySelector('.feedback-form [type="tel"]');
const message = document.querySelector('.input-message');
const messagefeedback = document.querySelector('.input-feedback-message');
const messageName = document.querySelector('.input-feedback-message-name');
const userName = document.querySelector('#callback-form-input-name');
const vacanciesForm = document.querySelector('.form-vacancies');
const userPhoneVacancies = document.querySelector('.form-vacancies [type="tel"]');
const userNameVacation = document.querySelector('#vacation-form-input-name');
const messageNameVacancies = document.querySelector('.input-vacancies-message-name');
const messageVacancies = document.querySelector('.input-vacancies-message');
// userPhone.addEventListener('click', function() {
//   if (!userPhone.value.trim()) {
//     userPhone.value = '+380';
//   }
// });

// userPhone.addEventListener('blur', function() {
//   if (userPhone.value === '+380') {
//     userPhone.value = '';
//   }
// });

function initMask(selector) {
  console.log(selector);
  $(selector).inputmask({
    mask: '+(38) 9{3} 9{3} 9{2} 9{2}',
    clearMaskOnLostFocus: false,
    greedy: false,
    tabThrough: true,
    groupSeparator: ' ',
    placeholder: '_',
    definitions: {
      '* ': {
        validator: '_',
      },
    },
  });
}
initMask(userPhone);
callbackForm.addEventListener('submit', event => {
  event.preventDefault();
  let hasError = false;
  const requiredFieldsCount = event.target.querySelectorAll('[data-required="true"]').length;
  let validFields = 0;
  if (!userPhone.value.trim() || !isPhoneValid(userPhone.value)) {
    message.classList.add('callback-form-input-error');
    hasError = true;
  } else {
    validFields++;
    message.classList.remove('callback-form-input-error');
  }

  // if (hasError) {
  // initMask(userPhone);
  // return;
  // }

  // if (isPhoneValid(userPhone.value)) {
  //   requestReceivedModal.classList.add('sideform-active');
  //   setTimeout(() => {
  //     requestReceivedModal.classList.remove('sideform-active');
  //   }, 5000);
  //   formCall.classList.remove('sideform-active');
  //   document.querySelector('body').style.overflow = 'auto';
  // }
  if (validFields === requiredFieldsCount) {
    event.target.querySelector('[type="submit"]').disabled = true;
    send(
      new FormData(event.target),
      function() {
        $(userPhone).inputmask('remove');
        event.target.reset();
        initMask(userPhone);
        requestReceivedModal.classList.add('sideform-active');
        setTimeout(() => {
          requestReceivedModal.classList.remove('sideform-active');
        }, 5000);
        document.querySelector('body').style.overflow = 'auto';
        event.target.querySelector('[type="submit"]').disabled = false;
      },
      event.target,
    );
  }
  $(userPhone).inputmask('remove');
  userPhone.value = '';
  initMask(userPhone);
  // requestReceivedModal.classList.add('sideform-active');

  // setTimeout(function() {
  //   requestReceivedModal.classList.remove('sideform-active');
  // }, 2000);
  // btnForm.addEventListener('click', function() {
  //   requestReceivedModal.classList.add('sideform-active');
  //   setTimeout(function() {
  //     requestReceivedModal.classList.remove('sideform-active');
  //   }, 2000);
  // });
});

function isPhoneValid(phone = '') {
  const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;
  return phone.match(regexp);
}

initMask(userPhoneForm);
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  let hasError1 = false;
  const requiredFieldsCount = event.target.querySelectorAll('[data-required="true"]').length;
  let validFields = 0;
  if (!userPhoneForm.value.trim() || !isPhoneValid(userPhoneForm.value)) {
    messagefeedback.classList.add('callback-form-input-error');
    hasError1 = true;
  } else {
    validFields++;
    messagefeedback.classList.remove('callback-form-input-error');
  }
  if (!userName.value.trim()) {
    messageName.classList.add('callback-form-input-error');
    hasError = true;
  } else {
    validFields++;
    messageName.classList.remove('callback-form-input-error');
  }

  if (hasError1) {
    initMask(userPhoneForm);
    // return;
  }
  // if (userName.value.trim() && isPhoneValid(userPhoneForm.value)) {
  //   requestReceivedModal.classList.add('sideform-active');
  //   setTimeout(() => {
  //     requestReceivedModal.classList.remove('sideform-active');
  //   }, 3000);
  //   formCall.classList.remove('sideform-active');
  //   document.querySelector('body').style.overflow = 'auto';
  // }

  if (validFields === requiredFieldsCount) {
    event.target.querySelector('[type="submit"]').disabled = true;
    send(
      new FormData(event.target),
      function() {
        $(userPhoneForm).inputmask('remove');
        event.target.reset();
        initMask(userPhoneForm);
        console.log(feedbackForm);
        if (feedbackForm.closest('.sideform-active') !== null) {
          feedbackForm.closest('.sideform-active').classList.remove('sideform-active');
        }

        requestReceivedModal.classList.add('sideform-active');
        setTimeout(() => {
          requestReceivedModal.classList.remove('sideform-active');
        }, 5000);
        document.querySelector('body').style.overflow = 'auto';
        event.target.querySelector('[type="submit"]').disabled = false;
      },
      event.target,
    );
  }
});

initMask(userPhoneVacancies);

vacanciesForm.querySelector('[type="file"]').addEventListener('change', evt => {
  if (evt.target.files.length === 0) {
    vacanciesForm.querySelector('.field__file-wrapper').innerText = 'Выберите файл';
  } else {
    vacanciesForm.querySelector('.field__file-wrapper').innerText = evt.target.files[0].name;
    vacanciesForm
      .querySelector('.field__file-wrapper')
      .closest('.form-field-input')
      .querySelector('.input-vacancies-message')
      .classList.remove('callback-form-input-error');
  }
  console.log(evt.target.files);
});
vacanciesForm.addEventListener('submit', event => {
  event.preventDefault();
  const fileInput = vacanciesForm.querySelector('[type="file"]');
  const requiredFieldsCount = event.target.querySelectorAll('[data-required="true"]').length;
  let validFields = 0;
  let hasError1 = false;
  if (fileInput.files.length === 0) {
    vacanciesForm
      .querySelector('.field__file-wrapper')
      .closest('.form-field-input')
      .querySelector('.input-vacancies-message')
      .classList.add('callback-form-input-error');
  } else {
    validFields++;
    vacanciesForm
      .querySelector('.field__file-wrapper')
      .closest('.form-field-input')
      .querySelector('.input-vacancies-message')
      .classList.remove('callback-form-input-error');
  }
  if (!userPhoneVacancies.value.trim() || !isPhoneValid(userPhoneVacancies.value)) {
    messageVacancies.classList.add('callback-form-input-error');
    hasError1 = true;
  } else {
    validFields++;
    messageVacancies.classList.remove('callback-form-input-error');
  }
  if (!userNameVacation.value.trim()) {
    messageNameVacancies.classList.add('callback-form-input-error');
    hasError = true;
  } else {
    validFields++;
    messageNameVacancies.classList.remove('callback-form-input-error');
  }

  if (hasError1) {
    initMask(userPhoneVacancies);
  }
  if (
    userNameVacation.value.trim() &&
    isPhoneValid(userPhoneVacancies.value) &&
    fileInput.files.length !== 0
  ) {
    // requestReceivedModal.classList.add('sideform-active');
    // setTimeout(() => {
    //   requestReceivedModal.classList.remove('sideform-active');
    // }, 3000);
    // vacanciesForm.classList.remove('sideform-active');
    // document.querySelector('body').style.overflow = 'auto';
  }

  if (validFields === requiredFieldsCount) {
    event.target.querySelector('[type="submit"]').disabled = true;
    send(
      new FormData(event.target),
      function() {
        $(userPhoneVacancies).inputmask('remove');
        // userPhoneVacancies.value = '';
        // userNameVacation.value = '';
        event.target.reset();
        initMask(userPhoneVacancies);
        console.log(vacanciesForm);
        vacanciesForm.classList.remove('sideform-active');
        requestReceivedModal.classList.add('sideform-active');
        setTimeout(() => {
          requestReceivedModal.classList.remove('sideform-active');
        }, 5000);
        document.querySelector('body').style.overflow = 'auto';
        event.target.querySelector('[type="submit"]').disabled = false;
      },
      event.target,
    );
  }
});
function send(data, cb, form) {
  data.append('action', 'app');
  fetch('/wp-admin/admin-ajax.php', {
    body: data,
    method: 'POST',
  })
    .then(res => res.json())
    .then(res => {
      if (res.error === 0) {
        console.log(cb);
        cb();
      }
    })
    .catch(err => {
      form.querySelector('[type="submit"]').disabled = false;
    });
}
// $.mask.definitions['#'] = '[0-9]';
// $.mask.definitions['9'] = '';
// $('input[name=tel]').mask('+38 (0##) ###-##-##', {
//   placeholder: '_',
// });

// locoScroll.scrollTo(document.querySelector('.footer'));

// const btnCall = document.querySelector('.js-call');
const btnCallMenu = document.querySelectorAll('.js-call');
const btnClose = document.querySelectorAll('.js-close');
const formCall = document.querySelector('.form');
const formGratitude = document.querySelector('.form-gratitude');
const btnVacanciesClose = document.querySelector('.js-vacancies-close');
const btnCallVacancies = document.querySelectorAll('.js-vacancies-send');

// btnCall.addEventListener('click', () => {
//   formCall.classList.toggle('sideform-active');
// });
btnCallMenu.forEach(el =>
  el.addEventListener('click', () => {
    console.log('ffffff');
    formCall.classList.toggle('sideform-active');
    document.querySelector('body').style.overflow = 'hidden';
  }),
);

btnClose.forEach(el =>
  el.addEventListener('click', () => {
    formCall.classList.remove('sideform-active');
    document.querySelector('body').style.overflow = 'auto';
  }),
);
btnClose.forEach(el =>
  el.addEventListener('click', () => {
    formGratitude.classList.remove('sideform-active');
    document.querySelector('body').style.overflow = 'auto';
  }),
);
console.log('btnForm', btnForm);
btnForm.forEach(el =>
  el.addEventListener('click', () => {
    formGratitude.classList.remove('sideform-active');
    document.querySelector('body').style.overflow = 'auto';
  }),
);

// Vacancies start
btnCallVacancies.forEach(el =>
  el.addEventListener('click', () => {
    vacanciesForm.classList.toggle('sideform-active');
    document.querySelector('body').style.overflow = 'hidden';
  }),
);
btnVacanciesClose.addEventListener('click', () => {
  vacanciesForm.classList.remove('sideform-active');
  document.querySelector('body').style.overflow = 'auto';
  formGratitude.classList.remove('sideform-active');
  document.querySelector('body').style.overflow = 'auto';
});
// Vacancies end
// console.log(locoScroll);

// Mobile phone menu start
const btnCallMobile = document.querySelectorAll('.js-mobile-call');
const btnCloseMobile = document.querySelector('.js-mobile-close');
const formMobile = document.querySelector('.form-header-call');
const formCallMobile = document.querySelector('.js-mobile-form');
formCallMobile.addEventListener('click', () => {
  formCall.classList.add('sideform-active');
  document.querySelector('body').style.overflow = 'hidden';
  // if (userName.value.trim() && isPhoneValid(userPhoneForm.value)) {
  //   requestReceivedModal.classList.add('sideform-active');
  //   setTimeout(() => {
  //     requestReceivedModal.classList.remove('sideform-active');
  //   }, 3000);
  //   formCall.classList.remove('sideform-active');
  //   document.querySelector('body').style.overflow = 'auto';
  // }
});
btnCallMobile.forEach(el =>
  el.addEventListener('click', () => {
    formMobile.classList.toggle('sideform-active');
    document.querySelector('body').style.overflow = 'hidden';
  }),
);

btnCloseMobile.addEventListener('click', () => {
  formMobile.classList.remove('sideform-active');
  document.querySelector('body').style.overflow = 'auto';
  // formGratitude.classList.add('sideform-active');
  // document.querySelector('body').style.overflow = 'auto';
});

formMobile.addEventListener('click', onBackdropClick);
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    formMobile.classList.remove('sideform-active');
    document.querySelector('body').style.overflow = 'auto';
  }
}

// function closeMobile(event) {
//   if (!el.contains(event.target)) {
//     el.classList.remove('lang-mobile');
//   }
// }
// document.addEventListener('click', closeMobile);

// Mobile phone menu end

function handleVisibilityOnScroll(elems = [], direction = 'up') {
  elems.forEach(elem => {
    switch (direction) {
      case 'down':
        elem[0].classList.add(elem[1]);
        break;
      default:
        elem[0].classList.remove(elem[1]);
        break;
    }
  });
}
const header = document.querySelector('.header-content');
console.log(header);
locoScroll.on('scroll', position => {
  if (position.scroll.y > 50) {
    handleVisibilityOnScroll([[header, 'not-on-top']], 'down');
  } else {
    handleVisibilityOnScroll([[header, 'not-on-top']]);
  }
});

//accordion start
const closeAccButtons = document.querySelectorAll('.sticky-container');
const accHD = document.querySelectorAll('.accordionItemHeading');
const closeAccItem = document.querySelectorAll('.arrow-accordion');

// accHD.forEach(el =>
//   el.addEventListener('click', e => {
//     console.log('ffffffffffff');
//     const item = e.target.closest('.accordionItem');
//     if (!item) return;
//     item.classList.remove('close');
//     item.classList.add('open');
//     // item.classList.toggle('open');
//   }),
// );
// closeAccButtons.forEach(el =>
//   el.addEventListener('click', e => {
//     const item = e.target.closest('.accordionItem');
//     if (!item) return;
//     const headerHeight = document.getElementsByTagName('header')[0].offsetHeight * -1;
//     console.log(headerHeight);
//     window.locoScroll.scrollTo(item, {
//       offset: headerHeight,
//     });
//     setTimeout(() => {
//       item.classList.remove('open');
//       item.classList.add('close');
//     }, 300);
//   }),
// );

accHD.forEach(el =>
  el.addEventListener('click', e => {
    // console.log('ffffffffffff');
    const item = e.target.closest('.accordionItem');
    if (!item) return;
    // item.classList.remove('close');
    // item.classList.add('open');
    item.classList.toggle('close');
    item.classList.toggle('open');
    window.locoScroll.update();
  }),
);
closeAccButtons.forEach(el =>
  el.addEventListener('click', e => {
    const item = e.target.closest('.accordionItem');
    if (!item) return;
    const headerHeight = document.getElementsByTagName('header')[0].offsetHeight * -1;
    console.log(headerHeight);
    window.locoScroll.scrollTo(item, {
      offset: headerHeight,
    });
    setTimeout(() => {
      item.classList.remove('open');
      item.classList.add('close');
    }, 300);
  }),
);

//accordion end

// select start
$('.select').each(function() {
  // Variables
  var $this = $(this),
    selectOption = $this.find('option'),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(':selected'),
    dur = 500;

  $this.hide();
  // Wrap all in select box
  $this.wrap('<div class="select"></div>');
  // Style box
  $('<div>', {
    class: 'select__gap',
    text: 'Оберіть вакансію', //Placeholder
  }).insertAfter($this);

  var selectGap = $this.next('.select__gap'),
    caret = selectGap.find('.caret');
  // Add ul list
  $('<ul>', {
    class: 'select__list',
  }).insertAfter(selectGap);

  var selectList = selectGap.next('.select__list');
  // Add li - option items
  for (var i = 0; i < selectOptionLength; i++) {
    $('<li>', {
      class: 'select__item',
      html: $('<span>', {
        text: selectOption.eq(i).text(),
      }),
    })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }
  // Find all items
  var selectItem = selectList.find('li');

  selectList.slideUp(0);
  selectGap.on('click', function() {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(dur);
      // selectList.slideUp(dur);

      selectItem.on('click', function() {
        var chooseItem = $(this).data('value');
        console.log(chooseItem);

        $('select')
          .val(chooseItem)
          .attr('selected', 'selected');
        selectGap.text(
          $(this)
            .find('span')
            .text(),
        );

        selectList.slideUp(dur);
        // selectList.slideDown(dur);
        selectGap.removeClass('on');
      });
    } else {
      $(this).removeClass('on');
      selectList.slideUp(dur);
      // selectList.slideDown(dur);
    }
  });
});
// select end

// input file start
let fields = document.querySelectorAll('.field__file');
Array.prototype.forEach.call(fields, function(input) {
  let label = input.nextElementSibling;
  const fieldFileFake = label.querySelector('.field__file-fake');
  let labelVal = fieldFileFake ? fieldFileFake.innerText : '';

  input.addEventListener('change', function(e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1) countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
    else label.querySelector('.field__file-fake').innerText = labelVal;
  });
});
// input file end

// button lang start
const btnLang = document.querySelectorAll('.js-lang');
const lang = document.querySelectorAll('.lang-block');
lang.forEach(el => {
  console.log(el);
  el.addEventListener('click', () => {
    el.classList.add('lang-mobile');
    // console.log(el);
  });
});

function handleClick(event) {
  lang.forEach(el => {
    if (!el.contains(event.target)) {
      el.classList.remove('lang-mobile');
    }
  });
}
document.addEventListener('click', handleClick);
// button lang end

// lazyImages
// const lazyImages = document.querySelectorAll('img[data-src]:not(.swiper-lazy)');

// lazyImages.forEach(imageArgs => {
//   const image = imageArgs;
//   image.style.opacity = 0;
//   image.style.transition = ' .3s ease-out';
//   image.addEventListener('load', () => {
//     image.style.opacity = 1;
//   });
//   const target = image;
//   const observer = new IntersectionObserver(
//     entries => {
//       /* Content excerpted, show below */
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const lazyImage = entry.target;
//           lazyImage.src = lazyImage.dataset.src;
//           image.style.transition = '';
//           observer.unobserve(target);
//         }
//       });
//     },
//     {
//       rootMargin: '0px',
//       threshold: 0.1,
//     },
//   );
//   observer.observe(target);
// });
