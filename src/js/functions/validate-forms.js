import JustValidate from 'just-validate';
import Inputmask from "inputmask";
import { disableScroll } from "./disable-scroll";
import { modalOpen, modalCLose } from "./modal";
import { enableScroll } from "./enable-scroll";

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);

  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function() {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: item.telError
        });
      }
    }
  }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules, item.errorMessage);
  }

  validation.onSuccess((ev) => {
    modalOpen()
    disableScroll()

    window.setTimeout(function () {
      modalCLose()
      enableScroll()
    }, 1500);
  })

};
