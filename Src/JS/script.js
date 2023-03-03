/**********************************************/
/*variables*/
/*********************************************/
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closing = document.querySelectorAll(".closing");
const form = document.querySelector("form");
const inputs = document.querySelectorAll(".text-control");
const emptyModale = document.querySelector(".modal-body");
let cityName = "new york";
let tournement = 0;
let checkCondition = true;
let checked = false;
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
/*Modal setting*/
/*********************************************/

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
};
// close modal form, include delete validation popup
const closeModal = () => {
  modalbg.style.display = "none";
  emptyModale.style.opacity = "1";
  register.style.display = "none";
};
//open validation popup
const openValidation = () => {
  emptyModale.style.opacity = "0"; //information in modale opacity to 0
  register.style.display = "flex"; //display the validation popup
};

/**********************************************/
/*Form validation*/
/*********************************************/

//fonction errordisplay, if message is not empty get red border and error message. Else delete error message and border
const errorDisplay = (message, itemId) => {
  if (message != "") {
    document.getElementById(itemId).style.border = "solid 2px red";
    document.getElementById(itemId.concat("Error")).textContent = message;
  } else {
    document.getElementById(itemId).style.border = "";
    document.getElementById(itemId.concat("Error")).textContent = message;
  }
};

//check firstname, if less than 2 or more than 25 & if its special characters, get error message, send message and id in errorDisplay()
const firstnameChecker = (value, itemId) => {
  if (
    value.length > 0 &&
    (value.length < 2 || value.length > 25 || !value.match(/^[a-zA-Z0-9_.-]*$/))
  ) {
    errorDisplay(
      "Veuillez entrer entre 2 et 25 caractères, sans caractères spéciaux",
      itemId
    );
    firstname = null;
  } else {
    firstname = value;
    errorDisplay("", itemId);
  }
};
//check lastname, if less than 2 or more than 25 & if its special characters, get error message, send message and id in errorDisplay()
const lastnameChecker = (value, itemId) => {
  if (
    (value.length > 0 && value.length < 2) ||
    value.length > 25 ||
    !value.match(/^[a-zA-Z0-9_.-]*$/)
  ) {
    errorDisplay(
      "Veuillez entrer entre 2 et 25 caractères, sans caractères spéciaux",
      itemId
    );
    lastname = null;
  } else {
    lastname = value;
    errorDisplay("", itemId);
  }
};
//check email , if its not email standard get error message, send message and id in errorDisplay()
const emailChecker = (value, itemId) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    checkmail = null;
    errorDisplay(
      "Veuillez entrer un email valide au format monemail@example.com",
      itemId
    );
  } else {
    checkmail = value;
    errorDisplay("", itemId);
  }
};
//check birthday, if its not standard date & >2010 et <1900 =>  get error message, send message and id in errorDisplay()
const birthdayChecker = (value, itemId, yearChoice) => {
  if (
    yearChoice >= 2010 ||
    yearChoice <= 1900 ||
    !value.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)
  ) {
    errorDisplay(
      "Vous devez entrer une date de naissance valide, vous devez avoir plus de 13ans.",
      itemId
    );
    birthday = null;
  } else {
    birthday = value;
    errorDisplay("", itemId);
  }
};
//check tournament, if tournement not between 0 and 20, get error message, send message and id in errorDisplay()
const tournamentChecker = (value, itemId) => {
  if (value < 0 || value > 20) {
    errorDisplay(
      "Le nombre de tournois doit être compris entre 0 et 20",
      itemId
    );
    tournement = null;
  } else {
    tournement = value;
    errorDisplay("", itemId);
  }
};
//check condition, if not checked get error message and style, else true
const conditionChecker = () => {
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
/*addeventlistener*/
/*********************************************/

// launch modal fonction when click on btn (different button for mobile & desktop)
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close the modale when click on the cross & button (use for close validation popup)
closing.forEach((btn) => btn.addEventListener("click", closeModal));

//get the firstname value & id
first.addEventListener("input", (e) => {
  firstnameChecker(e.target.value, e.target.id);
});
//get the lastname value & id
last.addEventListener("input", (e) => {
  lastnameChecker(e.target.value, e.target.id);
});
//get the email value & id
email.addEventListener("input", (e) => {
  emailChecker(e.target.value, e.target.id);
});
//get the birthday value & id & yearchoice
birthdate.addEventListener("input", (e) => {
  let yearChoice = e.target.value.split("-")[0]; //split the date and keep the year for control the age
  /*console.log(e.target.value.split("-")[0])*/
  birthdayChecker(e.target.value, e.target.id, yearChoice);
});
// get the tournament value and id
quantity.addEventListener("input", (e) => {
  tournamentChecker(e.target.value, e.target.id);
});
// get the city value
const cityInput = document.querySelectorAll(".city-input");

cityInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    cityName = e.target.value;
  });
});
//lauch the fonction conditionChecker
checkbox1.addEventListener("input", (e) => {
  conditionChecker();
});

//if checkbox checked getinformation = true else = false

checkbox2.addEventListener("input", (e) => {
  if (!checked) {
    checked = true;
    console.log(checked);
  } else {
    checked = false;
    console.log(checked);
  }
});

//submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //if everyting is good we send the informations
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
      checked,
    };
    console.log(keepData); //just for know what is send

    inputs.forEach((input) => (input.value = "")); //empty all the input

    checkbox2.checked = false;

    openValidation(); //launch validation popup

    //empty validation variables
    firstname = null;
    lastname = null;
    checkmail = null;
    birthday = null;
    cityName = "new york";
    tournement = 0;
    checkCondition = true;
    checked = false;
  } else {
    alert("veuillez remplir le formulaire correctement");
  }
});
