let isScrolling = false;

document.addEventListener('DOMContentLoaded', () => {
  formCall.style.display = '';
  popup.style.display = '';
  formGratitude.style.display = '';
  formMobile.style.display = '';
  popupWorks.style.display = '';
});

function handleVisibilityOnScroll(elems = [], direction = 'up') {
  elems.forEach((elem) => {
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

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header-js');
  window.locoScroll
    && window.locoScroll.on('scroll', (position) => {
      if ((!isScrolling && position.scroll.y <= 50) || (isScrolling && position.scroll.y > 50)) return;

      isScrolling = position.scroll.y > 50;
      const direction = isScrolling ? 'down' : 'up';
      handleVisibilityOnScroll([[header, 'not-on-top']], direction);
    });
});

const popup = document.querySelector('.popup-equipment');
const popupWorks = document.querySelector('.popup-works');
const menuContainer = document.querySelector('.js-menu-container');
const menuClose = document.querySelector('.js-menu-close');
const menuOpen = document.querySelector('.js-menu-open');
menuOpen.addEventListener('click', () => {
  if (menuContainer.classList.contains('active')) return;
  document.querySelector('body').style.overflow = 'hidden';
  menuContainer.classList.add('active');
  // menuContainer.querySelector('.noise').classList.add('noise1');
  // menuContainer.querySelector('.noise1').classList.add('noise');
});

menuClose.addEventListener('click', () => {
  if (!menuContainer.classList.contains('active')) return;
  menuContainer.classList.remove('active');
  document.querySelector('body').style.overflow = 'auto';
  // menuContainer.querySelector('.noise').classList.remove('noise');
});

// Mobile phone menu start
const btnCallMobile = document.querySelector('.js-mobile-call');
const btnCloseMobile = document.querySelector('.js-mobile-close');
const formMobile = document.querySelector('.form-header-call');
const formCallMobile = document.querySelector('.js-mobile-form');
formCallMobile.addEventListener('click', () => {
  formCall.classList.add('sideform-active');
  document.querySelector('body').style.overflow = 'hidden';
});
btnCallMobile.addEventListener('click', () => {
  formMobile.classList.toggle('sideform-active');
  document.querySelector('body').style.overflow = 'hidden';
});

btnCloseMobile.addEventListener('click', () => {
  formMobile.classList.remove('sideform-active');
  document.querySelector('body').style.overflow = 'auto';
  formGratitude.classList.remove('sideform-active');
  document.querySelector('body').style.overflow = 'auto';
});
formMobile.addEventListener('click', onBackdropClick);
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    formMobile.classList.remove('sideform-active');
    document.querySelector('body').style.overflow = 'auto';
  }
}
// Mobile phone menu end

const btnCallMenu = document.querySelectorAll('.js-call');
const btnClose = document.querySelectorAll('.js-close');
const formCall = document.querySelector('.sideform');
const formGratitude = document.querySelector('.form-gratitude');
const btnForm = document.querySelectorAll('.form-button-js');
const btnCloseGrat = document.querySelectorAll('.js-close-grat');

btnCallMenu.forEach(el => el.addEventListener('click', () => {
  formCall.classList.toggle('sideform-active');
  document.querySelector('body').style.overflow = 'hidden';
}));

btnClose.forEach(el => el.addEventListener('click', () => {
  formCall.classList.remove('sideform-active');
  document.querySelector('body').style.overflow = 'auto';
}));
btnCloseGrat.forEach(el => el.addEventListener('click', () => {
  formGratitude.classList.remove('sideform-active');
  formCall.classList.remove('sideform-active');
  document.querySelector('body').style.overflow = 'auto';
  gsap.to(formGratitude, { autoAlpha: 0 });
}));
btnForm.forEach(el => el.addEventListener('click', () => {
  formGratitude.classList.remove('sideform-active');
  document.querySelector('body').style.overflow = 'auto';
}));

// form

// function initMask(selector) {
//   $(selector).inputmask({
//     // mask: '+(38) 9{3} 9{3} 9{2} 9{2}',
//     /* prettier-ignore */
//     mask: '+\\97 (9{3}) 9{3} 9{2} 9{2}',
//     clearMaskOnLostFocus: false,
//     greedy: false,
//     tabThrough: true,
//     groupSeparator: ' ',
//     placeholder: '_',
//     definitions: {
//       '* ': {
//         validator: '_',
//       },
//     },
//   });
// }

// footer form

const callbackForm = document.querySelector('.contact-form');
const requestReceivedModal = document.querySelector('.form-gratitude');
const btn = document.querySelector('.form-button-js');
const userPhone = document.querySelector('#callback-form-input-phone');
const message = document.querySelector('.contact-form-input');

// initMask(userPhone);
// callbackForm.addEventListener('submit', (event) => {
//   return;
//   event.preventDefault();
//   let hasError = false;
//   const requiredFieldsCount = event.target.querySelectorAll('[data-required="true"]').length;
//   let validFields = 0;
//   if (!userPhone.value.trim() || !isPhoneValid(userPhone.value)) {
//     message.classList.add('error-form-input');
//     hasError = true;
//   } else {
//     validFields++;
//     message.classList.remove('error-form-input');
//   }
//   if (validFields === requiredFieldsCount) {
//     event.target.querySelector('[type="submit"]').disabled = true;
//     send(
//       new FormData(event.target),
//       () => {
//         $(userPhone).inputmask('remove');
//         event.target.reset();
//         initMask(userPhone);
//         requestReceivedModal.classList.add('.form-gratitude-active');
//         setTimeout(() => {
//           requestReceivedModal.classList.remove('.form-gratitude-active');
//         }, 5000);
//         document.querySelector('body').style.overflow = 'auto';
//         event.target.querySelector('[type="submit"]').disabled = false;
//       },
//       event.target,
//     );
//   }
//   $(userPhone).inputmask('remove');
//   userPhone.value = '';
//   initMask(userPhone);
// });

function isPhoneValid(phone = '') {
  const regexp = /(\+97)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;
  return phone.match(regexp);
}

// header form
const callbackHeaderForm = document.querySelector('.sideform');
// const requestReceivedModal = document.querySelector('.form-gratitude');
const btnHeaderForm = document.querySelector('.header-form-button-js');
const userPhoneHeader = document.querySelector('#callback-form-phone');
const messageName = document.querySelector('.form-name');
const messageTel = document.querySelector('.form-tel');
const messageEmail = document.querySelector('.form-email');
const userName = document.querySelector('#callback-form-input-name');
const userEmail = document.querySelector('#callback-form-email');

// initMask(userPhoneHeader);
// callbackHeaderForm.addEventListener('submit', (event) => {
//   return;
//   event.preventDefault();
//   let hasError1 = false;
//   const requiredFieldsCount = event.target.querySelectorAll('[data-required="true"]').length;
//   let validFields = 0;
//   if (!userPhoneHeader.value.trim() || !isPhoneValid(userPhoneHeader.value)) {
//     messageName.classList.add('error-form-input');
//     hasError1 = true;
//   } else {
//     validFields++;
//     messagefeedback.classList.remove('error-form-input');
//   }
//   if (!userName.value.trim()) {
//     messageName.classList.add('error-form-input');
//     hasError = true;
//   } else {
//     validFields++;
//     messageName.classList.remove('error-form-input');
//   }

//   if (hasError1) {
//     initMask(userPhoneHeader);
//     // return;
//   }
//   if (validFields === requiredFieldsCount) {
//     event.target.querySelector('[type="submit"]').disabled = true;
//     send(
//       new FormData(event.target),
//       () => {
//         $(userPhoneHeader).inputmask('remove');
//         event.target.reset();
//         initMask(userPhoneHeader);
//         if (feedbackForm.closest('.sideform-active') !== null) {
//           feedbackForm.closest('.sideform-active').classList.remove('sideform-active');
//         }

//         requestReceivedModal.classList.add('sideform-active');
//         setTimeout(() => {
//           requestReceivedModal.classList.remove('sideform-active');
//         }, 5000);
//         document.querySelector('body').style.overflow = 'auto';
//         event.target.querySelector('[type="submit"]').disabled = false;
//       },
//       event.target,
//     );
//   }
// });
