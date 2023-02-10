const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.page-overlay');

export const modalOpen = () => {
  modalOverlay.classList.add('open');
  modal.classList.add('open');
}

export const modalCLose = () => {
  modalOverlay.classList.remove('open');
  modal.classList.remove('open');
}
