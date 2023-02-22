function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Fonctions
const modalbg = document.querySelector(".bground");
const cross = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//adeventlistener

// launch modal event when click on btn "Je m'inscris" (effacer for each? je vois un seul boutton... a voir)
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close the modale when click on the cross
cross.addEventListener("click", closeModal);
