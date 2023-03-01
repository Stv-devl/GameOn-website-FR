/**********************************************/
/*variables*/
/*********************************************/
const modalbg = document.querySelector(".bground");
const cross = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const sendForm = document.querySelector(".btn-submit");

/**********************************************/
/*navigation popup*/
/*********************************************/
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**********************************************/
/*Form validation*/
/*********************************************/

// fonction firstnameErrorDisplay
const fistnameErrorDisplay = () => {
  if (firstname == false) {
    firstNameError.textContent =
      "Veuillez entrer entre 2 et 25 caractères, sans caractères spéciaux";
    first.style.border = "solid 2px red";
  } else {
    first.style.border = "none";
    firstNameError.textContent = "";
  }
};

// fonction firstnameErrorDisplay
const lastnameErrorDisplay = () => {
  if (lastname == false) {
    console.log("ça marche");
    lastNameError.textContent =
      "Veuillez entrer entre 2 et 25 caractères, sans caractères spéciaux";
    last.style.border = "solid 2px red";
  } else {
    last.style.border = "none";
    lastNameError.textContent = "";
  }
};

// fonction emailErrorDisplay
const emailErrorDisplay = () => {
  if (checkmail == false) {
    emailError.textContent =
      "Veuillez entrer un email valide au format monemail@example.com ";
    email.style.border = "solid 2px red";
  } else {
    email.style.border = "none";
    emailError.textContent = "";
  }
};

// fonction birthdayErrorDisplay
const birthdayErrorDisplay = () => {
  if (birthday == false) {
    birthdayError.textContent =
      "Vous devez entrer une date de naissance valide, vous devez avoir plus de 13ans.";
    birthdate.style.border = "solid 2px red";
  } else {
    birthdate.style.border = "none";
    birthdayError.textContent = "";
  }
};

// fonction tournementErrorDisplay
const tournementErrorDisplay = () => {
  if (tournement == false) {
    tournementError.textContent =
      "Le nombre de tournois doit être compris entre 1 et 20";
    quantity.style.border = "solid 2px red";
  } else {
    quantity.style.border = "none";
    tournementError.textContent = "";
  }
};

//check firstname
const firstnameChecker = (value) => {
  if (value.length > 0 && (value.length < 2 || value.length > 25)) {
    firstname = false;
    fistnameErrorDisplay(firstname);
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    firstname = false;
    fistnameErrorDisplay(firstname);
  } else {
    firstname = value;
    fistnameErrorDisplay(firstname);
  }
};

//check lastname
const lastnameChecker = (value) => {
  if (value.length > 0 && (value.length < 2 || value.length > 25)) {
    lastname = false;
    lastnameErrorDisplay(lastname);
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    lastname = false;
    lastnameErrorDisplay(lastname);
  } else {
    lastname = true;
    lastnameErrorDisplay(lastname);
  }
};

//check email
const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    checkmail = false;
    emailErrorDisplay(checkmail);
  } else {
    checkmail = true;
    emailErrorDisplay(checkmail);
  }
};

//check birthday
const birthdayChecker = (value, yearChoice) => {
  if (!value.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)) {
    birthday = false;
    birthdayErrorDisplay(birthday);
  } else if (yearChoice >= 2010 || yearChoice <= 1900) {
    birthday = false;
    birthdayErrorDisplay(birthday);
  } else {
    birthday = value;
    birthdayErrorDisplay(birthday);
  }
};

//check number of tournament
const tournamentChecker = (value) => {
  if (value <= 0 || value > 20) {
    tournement = false;
    tournementErrorDisplay(tournement);
  } else {
    tournement = value;
    tournementErrorDisplay(tournement);
  }
};

//check condition
const condititionChecker = (value) => {
  if (checkbox1.checked != true) {
    checkCondition = false;
    conditionError.textContent =
      "Veuillez accepté les conditions d'utilisation";
    conditionError.style.marginTop = "10px";
  } else {
    checkCondition = true;
    conditionError.textContent = "";
    conditionError.style.marginTop = "0px";
  }
};
/**********************************************/
/*Modal setting*/
/*********************************************/

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
};
// close modal form
const closeModal = () => {
  modalbg.style.display = "none";
  //remettre tout à 0 si on ferme la modale?
};

/**********************************************/
/*Validation popup*/
/*********************************************/

//open validation
//close validation

/**********************************************/
/*addeventlistener*/
/*********************************************/

//input firstname
first.addEventListener("input", (e) => {
  firstnameChecker(e.target.value);
});

//input family name
last.addEventListener("input", (e) => {
  lastnameChecker(e.target.value);
});

// input email
email.addEventListener("input", (e) => {
  emailChecker(e.target.value);
});
// input birthday
birthdate.addEventListener("input", (e) => {
  let dateArray = e.target.value.split("-"); //do array with date
  let yearChoice = dateArray[0]; //Keep the year
  birthdayChecker(e.target.value, yearChoice);
});

// input tournament
quantity.addEventListener("input", (e) => {
  tournamentChecker(e.target.value);
});

//input cities
const cityInput = document.querySelectorAll(".city-input");

cityInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    cityName = e.target.value;
  });
});

//input general condition
checkbox1.addEventListener("input", (e) => {
  condititionChecker(e.target.value);
});

//input get information
checkbox2.addEventListener("input", (e) => {
  console.log(e.target.value);
  getinformations = e.target.value;
});

//Submit//
sendForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// launch modal event when click on btn
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close the modale when click on the cross
cross.addEventListener("click", closeModal);
