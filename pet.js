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

// Multi step and validation form
var currentTab = 0;
showTab(currentTab);

// This function displays the specified form tab and Previus/Next buttons
function showTab(n) {
  let x = document.querySelectorAll(".tab");

  x[n].style.display = "block";

  if (n == 0) {
    document.getElementById("prev-btn").style.display = "none";
  } else {
    document.getElementById("prev-btn").style.display = "inline";
  }

  if (n == (x.length - 1)) {
    document.getElementById("next-btn").innerHTML = "Enviar";
  } else {
    document.getElementById("next-btn").innerHTML = "Próximo";
  }

  fixStepIndicator(n);
}

// This function checks which tab will be displayed
function nextPrev(n) {
  let x = document.querySelectorAll(".tab");

  if (n == 1 && !validateForm()) return false;

  x[currentTab].style.display = "none";

  currentTab = currentTab + n;

  if (currentTab >= x.length) {
    document.getElementById("pet-register-form").submit();
    return false;
  }

  showTab(currentTab);
}

// This function validates the form fields
function validateForm() {
  let x, y, i, valid = true;

  x = document.querySelectorAll(".tab");
  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {

    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }

  if (valid) {
    document.querySelectorAll(".step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  let i, x = document.querySelectorAll(".step");

  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }

  x[n].className += " active";
}