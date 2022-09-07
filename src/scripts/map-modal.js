(() => {
  const refs = {
    openMapModalBtn: document.querySelector('[data-map-open]'),
    closeMapModalBtn: document.querySelector('[data-map-close]'),
    modalMap: document.querySelector('[data-map-modal]'),
  };

  refs.openMapModalBtn.addEventListener('click', MapSlideIn);
  refs.closeMapModalBtn.addEventListener('click', MapSlideOut);

  function MapSlideIn() {
    refs.modalMap.className = 'modal__container in';
  }

  function MapSlideOut() {
    refs.modalMap.classList.add('out');
  }
})();
