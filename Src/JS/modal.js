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

//erreur
/*
"Veuillez entrer entre 2 et 25 caractères,sans caractères spéciaux."
"Veuillez entrer entre 2 et 25 caractères,sans caractères spéciaux."
"Veuillez entrer un email valid au format monemail@example.com "
"Vous devez entrer une date de naissance valide."
"Nous n'avons pas fait autants de tournois"

//vide 
"Veuillez entrer votre prénom."
"Veuillez entrer votre nom de famille."
"Veuillez renseigner votre email"
"Vous devez entrer votre date de naissance."
"Vous devez choisir une ville"
"Vous devez acceptez les termes et conditions."
*/

//check firstname
const firstnameChecker = (value) => {
  if (value.length > 0 && (value.length < 2 || value.length > 25)) {
    firstname = false;
    fistnameErrorDisplay(firstname);
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    firstname = false;
    fistnameErrorDisplay(firstname);
  } else {
    firstname = true;
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
    email = false;
    console.log("erreur");
  } else {
    email = true;
    console.log("ça marche");
  }
};

//check birth day
const birthdayChecker = (value) => {
  if (!value.match(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/)) {
    console.log("erreur");
  } else {
    console.log("ça marche");
  }
};

//check number of tournament
const tournamentChecker = (value) => {};

//check cities

//check SVG

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
  console.log(e.target.value);
});
// input birthday
birthdate.addEventListener("input", (e) => {
  console.log(e.target.value);
});
// input tournament
quantity.addEventListener("input", (e) => {
  console.log(e.target.value);
});

//input cities

const checkBoxInput = document.querySelectorAll(".checkbox-input");

checkBoxInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "location1":
        city = true;
        console.log(e.target.value);
        break;
      case "location2":
        city = true;
        console.log(e.target.value);
        break;
      case "location3":
        city = true;
        console.log(e.target.value);
        break;
      case "location4":
        city = true;
        console.log(e.target.value);
        break;
      case "location5":
        city = true;
        console.log(e.target.value);
        break;
      case "location6":
        city = true;
        console.log(e.target.value);
        break;
      case "checkbox1":
        generalConditions = true;
        console.log(e.target.value);
        break;
      case "checkbox2":
        acceptToGetMessage = true;
        console.log(e.target.value);
        break;
      default:
        null;
    }
  });
});

//Submit//
sendForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //if Firstname is not good add border color + red icone + texte

  //if lastname is not good add border color + red icone + texte

  //if email is not good add border color + red icone + texte

  //if birthday is not good

  // if input tournament is not good

  // if cities are not good

  // if CVG are not checked

  //if everything good, send data, delete error messages and delete everything write in forms, open validation popup
});

// launch modal event when click on btn
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close the modale when click on the cross
cross.addEventListener("click", closeModal);
