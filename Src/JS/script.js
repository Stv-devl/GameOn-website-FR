/**********************************************/
/*variables*/
/*********************************************/
const modalbg = document.querySelector(".bground");
const cross = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");
const error = document.querySelectorAll(".error");

let cityName = "new york";
let tournement = 0;
let checkCondition = true;
let getinformations = false;
let firstname, lastname, checkmail, birthday;

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

//input error display
const errorDisplay = (message, itemId, boolean) => {
  console.log((document.getElementById(itemId).style.border = "solid 2px red"));
  if (!boolean) {
    document.getElementById(itemId).style.border = "solid 2px red";
    document.getElementById(itemId.concat("Error")).textContent = message;
  } else {
    document.getElementById(itemId).style.border = "";
    document.getElementById(itemId.concat("Error")).textContent = message;
  }
};

//clean all input when we close the modal

//check firstname
const firstnameChecker = (value, itemId) => {
  if (
    value.length > 0 &&
    (value.length < 2 || value.length > 25 || !value.match(/^[a-zA-Z0-9_.-]*$/))
  ) {
    errorDisplay(
      "Veuillez entrer entre 2 et 25 caractères, sans caractères spéciaux",
      itemId,
      false
    );
    firstname = null;
  } else {
    firstname = value;
    errorDisplay("", itemId, true);
  }
};

//check lastname
const lastnameChecker = (value, itemId) => {
  if (
    (value.length > 0 && value.length < 2) ||
    value.length > 25 ||
    !value.match(/^[a-zA-Z0-9_.-]*$/)
  ) {
    errorDisplay(
      "Veuillez entrer entre 2 et 25 caractères, sans caractères spéciaux",
      itemId,
      false
    );
    lastname = null;
  } else {
    lastname = value;
    errorDisplay("", itemId, true);
  }
};

//check email
const emailChecker = (value, itemId) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    checkmail = null;
    errorDisplay(
      "Veuillez entrer un email valide au format monemail@example.com",
      itemId,
      false
    );
  } else {
    checkmail = value;
    errorDisplay("", itemId, true);
  }
};

//check birthday
const birthdayChecker = (value, itemId, yearChoice) => {
  console.log(itemId);
  if (
    yearChoice >= 2010 ||
    yearChoice <= 1900 ||
    !value.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)
  ) {
    errorDisplay(
      "Vous devez entrer une date de naissance valide, vous devez avoir plus de 13ans.",
      itemId,
      false
    );
    birthday = null;
  } else {
    birthday = value;
    errorDisplay("", itemId, true);
  }
};

//check number of tournament
const tournamentChecker = (value, itemId) => {
  console.log(itemId);
  if (value < 0 || value > 20) {
    errorDisplay(
      "Le nombre de tournois doit être compris entre 0 et 20",
      itemId,
      false
    );
    tournement = null;
  } else {
    tournement = value;
    errorDisplay("", itemId, true);
  }
};

//check condition
const condititionChecker = () => {
  if (!checkbox1.checked) {
    checkbox1Error.textContent =
      "Veuillez accepter les conditions d'utilisation";
    checkboxicon.style.border = "solid 2px red";
    checkbox1Error.style.marginTop = "10px";
    checkCondition = null;
  } else {
    checkbox1Error.textContent = "";
    checkboxicon.style.border = "none";
    checkbox1Error.style.marginTop = "0";
    checkCondition = true;
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
  firstnameChecker(e.target.value, e.target.id);
});

//input family name
last.addEventListener("input", (e) => {
  lastnameChecker(e.target.value, e.target.id);
});

// input email
email.addEventListener("input", (e) => {
  emailChecker(e.target.value, e.target.id);
});
// input birthday
birthdate.addEventListener("input", (e) => {
  let yearChoice = e.target.value.split("-")[0]; //split the date and keep the year
  birthdayChecker(e.target.value, e.target.id, yearChoice);
});

// input tournament
quantity.addEventListener("input", (e) => {
  tournamentChecker(e.target.value, e.target.id);
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
  if (!checkbox2.checked) {
    getinformations = false;
  }
  return (getinformations = true);
});

//Submit//
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    (firstname,
    lastname,
    checkmail,
    birthday && checkCondition == true && tournement <= 20)
  ) {
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

    // effacer les données à la validation
  } else {
    console.log("veuillez remplir le formulaire correctement");
  }
});

// launch modal event when click on btn
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close the modale when click on the cross
cross.addEventListener("click", closeModal);
