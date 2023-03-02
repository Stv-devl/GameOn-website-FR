/**********************************************/
/*variables*/
/*********************************************/
const modalbg = document.querySelector(".bground");
const cross = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");
let cityName = "new york";
let tournement = 0;
let checkCondition = true;
let firstname, lastname, checkmail, birthday, getinformations;

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
  if (firstname == null) {
    firstNameError.textContent =
      "Veuillez entrer entre 2 et 25 caractères, sans caractères spéciaux";
    first.style.border = "solid 2px red";
  } else {
    first.style.border = "none";
    firstNameError.textContent = "";
  }
};

// fonction lastnameErrorDisplay
const lastnameErrorDisplay = () => {
  if (lastname == null) {
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
  if (checkmail == null) {
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
  if (birthday == null) {
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
  if (tournement == null) {
    tournementError.textContent =
      "Le nombre de tournois doit être compris entre 0 et 20";
    quantity.style.border = "solid 2px red";
  } else {
    quantity.style.border = "none";
    tournementError.textContent = "";
  }
};

//check firstname
const firstnameChecker = (value) => {
  if (value.length > 0 && (value.length < 2 || value.length > 25)) {
    firstname = null;
    fistnameErrorDisplay(firstname);
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    firstname = null;
    fistnameErrorDisplay(firstname);
  } else {
    firstname = value;
    fistnameErrorDisplay(firstname);
  }
};

//check lastname
const lastnameChecker = (value) => {
  if (value.length > 0 && (value.length < 2 || value.length > 25)) {
    lastname = null;
    lastnameErrorDisplay(lastname);
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    lastname = null;
    lastnameErrorDisplay(lastname);
  } else {
    lastname = value;
    lastnameErrorDisplay(lastname);
  }
};

//check email
const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    checkmail = null;
    emailErrorDisplay(checkmail);
  } else {
    checkmail = value;
    emailErrorDisplay(checkmail);
  }
};

//check birthday
const birthdayChecker = (value, yearChoice) => {
  if (!value.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)) {
    birthday = null;
    birthdayErrorDisplay(birthday);
  } else if (yearChoice >= 2010 || yearChoice <= 1900) {
    birthday = null;
    birthdayErrorDisplay(birthday);
  } else {
    birthday = value;
    birthdayErrorDisplay(birthday);
  }
};

//check number of tournament
const tournamentChecker = (value) => {
  if (value <= 0 || value > 20) {
    tournement = null;
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
  let yearChoice = e.target.value.split("-")[0]; //split the date and keep the year
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
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(
    firstname,
    lastname,
    checkmail,
    birthday,
    checkCondition,
    cityName
  );
  if (
    (firstname,
    lastname,
    checkmail,
    birthday && checkCondition == true && tournement <= 20)
  ) {
    console.log("envoyé");
    const keepData = {
      firstname,
      lastname,
      checkmail,
      birthday,
      checkCondition,
      cityName,
      tournement,
      checkCondition,
      getinformations,
    };
    console.log(keepData);
  } else {
    console.log("ça ne marche pas");
  }
});

// launch modal event when click on btn
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close the modale when click on the cross
cross.addEventListener("click", closeModal);
