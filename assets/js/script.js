const characters = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "012345679",
  special: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
};

let charFinal = "";
const generateBtn = document.querySelector("#generate");

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

// code below is obtained and refactored from https://www.programiz.com/javascript/examples/generate-random-strings

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

generateBtn.addEventListener("click", writePassword);
