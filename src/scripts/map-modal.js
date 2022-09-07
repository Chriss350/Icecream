(() => {
  const refs = {
    openMapModalBtn: document.querySelector('[data-map-open]'),
    closeMapModalBtn: document.querySelector('[data-map-close]'),
    modalMap: document.querySelector('[data-map-modal]'),
    openFranchiseModalBtn: document.querySelector('[data-franchise-open]'),
    closeFranchiseModalBtn: document.querySelector('[data-franchise-modal-close]'),
    modalFranchise: document.querySelector('[data-franchise-modal]'),
  };

  refs.openMapModalBtn.addEventListener('click', MapSlideIn);
  refs.closeMapModalBtn.addEventListener('click', MapSlideOut);
  refs.openFranchiseModalBtn.addEventListener('click', FranchiseSlideIn);
  refs.closeFranchiseModalBtn.addEventListener('click', FranchiseSlideOut);

  function MapSlideIn() {
    refs.modalMap.className = 'modal__container in';
  }

  function MapSlideOut() {
    refs.modalMap.classList.add('out');
  }

  function FranchiseSlideIn() {
    refs.modalFranchise.className = 'modal__container in';
  }

  function FranchiseSlideOut() {
    refs.modalFranchise.classList.add('out');
  }
})();
