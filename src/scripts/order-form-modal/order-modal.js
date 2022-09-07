(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-order-modal-open]"),
        closeModalBtn: document.querySelector("[data-order-modal-close]"),
        modal: document.querySelector("[data-order-modal]"),
    };

    refs.openModalBtn.addEventListener("click", SlideIn);
    refs.closeModalBtn.addEventListener("click", SlideOut);

    function SlideIn() {
        refs.modal.className = "modal__container in";
    }

    function SlideOut() {
        refs.modal.classList.add("out");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-order-modal-open2]"),
        closeModalBtn: document.querySelector("[data-order-modal-close]"),
        modal: document.querySelector("[data-order-modal]"),
    };

    refs.openModalBtn.addEventListener("click", SlideIn);
    refs.closeModalBtn.addEventListener("click", SlideOut);

    function SlideIn() {
        refs.modal.className = "modal__container in";
    }

    function SlideOut() {
        refs.modal.classList.add("out");
    }
})();