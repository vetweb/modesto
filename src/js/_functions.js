// Реализация бургер-меню
// import { burger } from './functions/burger';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

import { pageLoaded } from './functions/page-loaded';
pageLoaded();
import { validateForms } from './functions/validate-forms';

const name = {
  ruleSelector: '.name',
  errorMessage: 'Name error',
  rules: [
    { rule: "minLength", value: 3 },
    { rule: "required" },
  ],
};
const email = {
  ruleSelector: '.email',
  errorMessage: 'email error',
  rules: [
    { rule: "email" },
    { rule: "required" },
  ],
};
const rules1 = [name, email];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.js-form', rules1, afterForm, disableScroll);
