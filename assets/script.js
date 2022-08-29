// GLOBAL VARIABLES
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "(", ")", ",", ".", "/", ":", ";", "<", ">", "?", "[", "]", "`", "{", "}", "|", "~", "*", "_", "-", "+", "="];




// TARGET THE ELEMENTS FROM THE DOM
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // When function runs need to ask the user the length of the password (8-128 characters) - prompt window - local variable of its own.
  // Add conditional to be sure password is within parameters.
  var selectCharacters = [];
  var finalPassword = [];

  var passwordLength = parseInt(prompt("Please enter password length between 8 - 128 characters."));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter between 8 - 128 characters.");
    return null;
  }

  if (isNaN(passwordLength)) {
    alert("Please enter numbers only.");
    return null;
  }

  // Confirm window for the user to select type of letters, numbers and/or special characters - local variable of its own (5 total local variables).
  var uppercase = confirm("Would you like to include uppercase letters?")
  var lowercase = confirm("Would you like to include lowercase letters?")
  var number = confirm("Would you like to include numbers?")
  var specialCharacter = confirm("Would you like to include special characters?")


  // Add conditional so the user selects at least one password parameter above.

  if (!uppercase && !lowercase && !number && !specialCharacter) {
    alert("Please select at least one option!");
    return null;
  }


  // Add a conditional to concatenate the arrays or not based on what the user selects for their password characters. 

  if (uppercase) {
    selectCharacters = selectCharacters.concat(upperAlpha)
  }
  if (lowercase) {
    selectCharacters = selectCharacters.concat(alpha)
  }
  if (number) {
    selectCharacters = selectCharacters.concat(numbers)
  }
  if (specialCharacter) {
    selectCharacters = selectCharacters.concat(symbols)
  }


  // (if/else statement - this one will loop based on the user's length - call the function with the number chosen by user in a new array with empty brackets - include the math random code line in this for loop)
  for (let index = 0; index < passwordLength; index++) {
    var randomCharacter = random(selectCharacters);

    finalPassword.push(randomCharacter)
  }


  return finalPassword.join(" "); // Have the function return the final password array - convert array into a string.
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);