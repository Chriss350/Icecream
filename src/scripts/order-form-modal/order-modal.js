(() => {
  const refs = {
    openModalBtn2: document.querySelector('[data-order-modal-open2]'),
    openModalBtn: document.querySelector('[data-order-modal-open]'),
    closeModalBtn: document.querySelector('[data-order-modal-close]'),
    modal: document.querySelector('[data-order-modal]'),
  };

  refs.openModalBtn.addEventListener('click', SlideIn);
  refs.closeModalBtn.addEventListener('click', SlideOut);
  refs.openModalBtn2.addEventListener('click', SlideIn);

  function SlideIn() {
    refs.modal.className = 'modal__container in';
  }

  function SlideOut() {
    refs.modal.classList.add('out');
  }
})();
