export const pageLoaded = () => {
  window.onload = function exampleFunction() {
    let flower1 = document.querySelector('.root__bg--flower');
    let flower2 = document.querySelector('.root__bg--flower2');

    flower1.classList.add('show');
    flower2.classList.add('show');
  }
};
