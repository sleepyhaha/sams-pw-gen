// Assignment code here

//
function generatePassword(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "012345679";
  const specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; index++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
