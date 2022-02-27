// Assignment Code
var generateBtn = document.querySelector("#generate");
let wordLength = 8;
let wordToPass = "";
const checkLowercase = document.getElementById("ckLowercase");
const checkUppercase = document.getElementById("ckUppercase");
const checkSpecial = document.getElementById("ckSpecial");
const checkNumerals = document.getElementById("ckNumerals");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// lists ofcharacters for each selection option
const listLowerCase = "abcdefghijklmnopqrstuvwxyz";
const listUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const listSpecial = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const listNumeral = "0123456789";
let listSelect = ""

// Click on Button to generate a password +/ series of prompts for password criteria

// Prompt for length of password 8-128 characters cw data validation for length selected (use window.alert if incorrect entry so that person marker can see that know how to use)

// Using window.prompt due to wording of assignment, but in practice would include this in the form
// validate is used to force user to enter a number between 8 and 128
function validate(numchar) {
  return (numchar >= 8 && numchar <= 128);
}

function promptLength(num) {
  wordLength = window.prompt((error_message || "") + "Password Length (min 8 to max 128):", 8);

  if (!validate(wordLength)) {
    generatePassword("Must enter a number between 8 and 128! \n");
  };
}

function randomNum() {
  return Math.floor(Math.random() * listSelect.length);
}

function generatePassword(error_message) {

  
  console.log("Lowercase: ", checkLowercase.checked)
  console.log("Uppercase: ", checkUppercase.checked)
  console.log("Special: ", checkSpecial.checked)
  console.log("Numbers: ", checkNumerals.checked)
  
  listSelect = "";
  wordToPass = "";
  if (checkLowercase.checked) {
    listSelect = listLowerCase;
  };
  if (checkUppercase.checked) {
    listSelect = listSelect + listUpperCase;
  };
  if (checkSpecial.checked) {
    listSelect = listSelect + listSpecial;
  };
  if (checkNumerals.checked) {
    listSelect = listSelect + listNumeral;
  };
  console.log(listSelect);

  for (i = 0; i < wordLength; i++){
    const letterPos = randomNum()
    console.log(`i: ${i} letter position ${letterPos}`)
    console.log(listSelect[letterPos]);
    wordToPass = wordToPass + listSelect[letterPos];
  }
  console.log(wordToPass);

  if (!checkLowercase.checked && !checkUppercase.checked && !checkSpecial.checked && !checkNumerals.checked) {
    window.alert("You must select the Password Criteria");
  } else {
    console.log(`Well done, you selected something`);
  }
  return wordToPass;
}

writePassword();

// Then asked for the character types to include in the password


// lowecase character selection (default)


// uppercase selection


// numeric selection


// special characters selection

// Generate the password that matches the criteria using random number generator

// Display the password, either in an alert or written to the page (mockup requires written to the password box)