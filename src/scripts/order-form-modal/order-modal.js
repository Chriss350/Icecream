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

// Get the button
let mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
