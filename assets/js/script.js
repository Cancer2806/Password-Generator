// Assignment Code
var generateBtn = document.querySelector("#generate");

const checkLowercase = document.getElementById("ckLowercase");
const checkUppercase = document.getElementById("ckUppercase");
const checkSpecial = document.getElementById("ckSpecial");
const checkNumerals = document.getElementById("ckNumerals");

// Global Variables
let wordLength = 8;
let wordToPass = "";
let listCriteria = ""

// Set of lists to apply for each password criteria selection
const listLowerCase = "abcdefghijklmnopqrstuvwxyz";
const listUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const listSpecial = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const listNumeral = "0123456789";

// Execute when the Generate Password button is clicked
function writePassword() {
  // Obtain criteria and generate random password
  var password = generatePassword();
  // Write password to the text area
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Validate selected password length
function validate(numchar) {
  return (numchar >= 8 && numchar <= 128);
}

// Prompts for length of password and validates
function promptLength(error_message) {
  wordLength = window.prompt((error_message || "") + "Password Length (min 8 to max 128):", 8);
  
  if (!validate(wordLength)) {
    promptLength("You must enter a number between 8 and 128! \n");
  };
}

// Generate random number to randomly pick character from the criteria list
function randomNum() {
  return Math.floor(Math.random() * listCriteria.length);
}

// Build selection lists and generate password
function generatePassword() {
  // Based on criteria selected, build list of acceptable characters
  listCriteria = "";
  wordToPass = "";
  if (checkLowercase.checked) {
    listCriteria = listLowerCase;
  };
  if (checkUppercase.checked) {
    listCriteria = listCriteria + listUpperCase;
  };
  if (checkSpecial.checked) {
    listCriteria = listCriteria + listSpecial;
  };
  if (checkNumerals.checked) {
    listCriteria = listCriteria + listNumeral;
  };
 
  // Prevent progression until criteria selected
  // If criteria acceptable, generate password of required length fitting selected criteria
  if (!checkLowercase.checked && !checkUppercase.checked && !checkSpecial.checked && !checkNumerals.checked) {
    window.alert("You must select the Password Criteria");
    wordToPass = "";
  } else {
    promptLength();
    for (i = 0; i < wordLength; i++) {
     wordToPass = wordToPass + listCriteria[randomNum()];
    }
  }
  return wordToPass;
}