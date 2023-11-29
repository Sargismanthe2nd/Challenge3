// Assignment code here
function generatePassword() {
  var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
  var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numerals = '1234567890'
  var symbols = '!@#$%&_'
  var allCharacters = lowercaseCharacters + uppercaseCharacters + numerals + symbols;
  var passwordLength = 10;
  var generatedPassword = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    generatedPassword += allCharacters.charAt(randomIndex);
  
  }
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
