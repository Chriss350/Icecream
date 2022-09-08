(() => {
  const refs = {
    openMapModalBtn: document.querySelector('[data-map-open]'),
    closeMapModalBtn: document.querySelector('[data-map-close]'),
    modalMap: document.querySelector('[data-map-modal]'),
    openFranchiseModalBtn: document.querySelector('[data-franchise-open]'),
    closeFranchiseModalBtn: document.querySelector('[data-franchise-modal-close]'),
    modalFranchise: document.querySelector('[data-franchise-modal]'),
    icereamBtnOpen: document.querySelector('[data-icecream-modal-open]'),
    iceream1BtnOpen: document.querySelector('[data-icecream1-modal-open]'),
    iceream2BtnOpen: document.querySelector('[data-icecream2-modal-open]'),
    icereamBtnClose: document.querySelector('[data-icecream-modal-close]'),
    modalIcecream: document.querySelector('[data-icecream-modal]'),
  };

  //Map
  refs.openMapModalBtn.addEventListener('click', MapSlideIn);
  refs.closeMapModalBtn.addEventListener('click', MapSlideOut);
  //Franchise
  refs.openFranchiseModalBtn.addEventListener('click', FranchiseSlideIn);
  refs.closeFranchiseModalBtn.addEventListener('click', FranchiseSlideOut);
  //icecream
  refs.icereamBtnOpen.addEventListener('click', IcecreamSlideIn);
  refs.iceream1BtnOpen.addEventListener('click', IcecreamSlideIn);
  refs.iceream2BtnOpen.addEventListener('click', IcecreamSlideIn);
  refs.icereamBtnClose.addEventListener('click', IcecreamSlideOut);

  function IcecreamSlideIn() {
    refs.modalIcecream.className = 'modal__container in';
    document.body.style.overflow = 'hidden';
  }

  function IcecreamSlideOut() {
    document.body.style.overflow = 'auto';
    refs.modalIcecream.classList.add('out');
  }

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
