// Assignment code here

//
const characters = {
  lowerCharacters: "abcdefghijklmnopqrstuvwxyz",
  upperCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "012345679",
  specialCharacters: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
};

function generatePassword(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * characters);
  }

  return result;
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.prompt("Please select a password length between 8 and 128 characters");
  window.confirm("Would you like to add lowercase letters?");
  window.confirm("Would you like to add uppercase letters?");
  window.confirm("Would you like to add numbers?");
  window.confirm("Would you like to add special characters?");
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
