// Assignment code here

//
const characters = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "012345679",
  special: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
};

let charFinal = "";
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function promptUser() {
  let passwordLength = window.prompt(
    "Please select a password length between 8 and 128 characters"
  );
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    confirm("Please enter a value between 8 and 128.");
    return;
  } else {
    answer = passwordLength;
  }

  let confirmLower = window.confirm("Would you like to add lowercase letters?");
  if (confirmLower === true) {
    charFinal += characters["lowerCase"];
  }
  let confirmUpper = window.confirm("Would you like to add uppercase letters?");
  if (confirmUpper === true) {
    charFinal += characters["upperCase"];
  }
  let confirmNumber = window.confirm("Would you like to add numbers?");
  if (confirmNumber === true) {
    charFinal += characters["numbers"];
  }
  let confirmSpecial = window.confirm(
    "Would you like to add special characters?"
  );
  if (confirmSpecial === true) {
    charFinal += characters["special"];
  }

  return generatePassword(passwordLength);
}

function generatePassword(passwordLength) {
  let result = "";
  const charFinalLength = charFinal.length;
  for (let i = 0; i < passwordLength; i++) {
    result += charFinal.charAt(Math.floor(Math.random() * charFinalLength));
  }

  return result;
}
function writePassword() {
  const password = promptUser();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
