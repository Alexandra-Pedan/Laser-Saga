$(window).resize(() => {
  window.locoScroll.update();
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
});
document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

const buttonUp = document.querySelector('.js-btn-up');
if (buttonUp) {
  buttonUp.addEventListener('click', () => {
    window.locoScroll.scrollTo(0);
  });
}

// form
const btn = document.querySelector('.form-button-js');
const btnForm = document.querySelectorAll('.button-js');
const userPhone = document.querySelector('#callback-form-input-phone');
const userPhoneForm = document.querySelector('.feedback-form [type="tel"]');
const message = document.querySelector('.input-message');

function initMask(selector) {
  console.log(selector);
  $(selector).inputmask({
    // mask: '+(38) 9{3} 9{3} 9{2} 9{2}',
    /* prettier-ignore */
    mask: '+\\97 (9{3}) 9{3} 9{2} 9{2}',
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
callbackForm.addEventListener('submit', (event) => {
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
  if (validFields === requiredFieldsCount) {
    event.target.querySelector('[type="submit"]').disabled = true;
    send(
      new FormData(event.target),
      () => {
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
});

function isPhoneValid(phone = '') {
  const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;
  return phone.match(regexp);
}

function send(data, cb, form) {
  data.append('action', 'app');
  fetch('/wp-admin/admin-ajax.php', {
    body: data,
    method: 'POST',
  })
    .then(res => res.json())
    .then((res) => {
      if (res.error === 0) {
        console.log(cb);
        cb();
      }
    })
    .catch((err) => {
      form.querySelector('[type="submit"]').disabled = false;
    });
}
// $.mask.definitions['#'] = '[0-9]';
// $.mask.definitions['9'] = '';
// $('input[name=tel]').mask('+38 (0##) ###-##-##', {
//   placeholder: '_',
// });

// locoScroll.scrollTo(document.querySelector('.footer'));
