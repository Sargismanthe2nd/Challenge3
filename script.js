// Assignment code here
function generatePassword() {
  //Character lists//
  var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numerals = '1234567890';
  var symbols = '!@#$%&_';

  // Password length prompt//
  var passwordLength = prompt("Password Length:(between 8 and 128 characters):");
  passwordLength = parseInt(passwordLength);

  // Validate password length
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    passwordLength = prompt("Password length:      (between 8 and 128 characters):");
    passwordLength = parseInt(passwordLength);
  }

  // Prompt for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumerals = confirm("Include numerals?");
  var includeSymbols = confirm("Include symbols?");

  
  // Generate the password
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
