const modal = document.querySelector(".modal"); //selects the modal
const btnCloseModal = document.querySelector(".close-modal"); //selects the button to close the modal
const btnOpenModal = document.querySelector(".show-modal"); //selects the button to show the modal
const overlay = document.querySelector(".overlay"); //selects the overlay

const toggleModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

btnOpenModal.addEventListener("click", toggleModal);

btnCloseModal.addEventListener("click", toggleModal);

overlay.addEventListener("click", toggleModal);
