// GLOBAL VARIABLES
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; -Can just call alpha .toUpperCase
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "(", ")", ",", ".", "/", ":", ";", "<", ">", "?", "[", "]", "`", "{", "}", "|", "~", "*", "_", "-", "+", "="];




// TARGET THE ELEMENTS FROM THE DOM
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // When function runs need to ask the user the length of the password (8-128 characters) - prompt window - local variable of its own.
  // Add conditional to be sure password is within parameters.
  var password = "";
  var lowercase = ;
  var uppercase = ;
  var number = ;
  var specialCharacter = ;

  var password = window.prompt("Please enter password length between 8 - 128 characters.");
    if (password < 8 || password > 128) {
      window.alert("Please enter between 8 - 128 characters.");
    } else {
        return password;
    }
  };
  
  // Confirm window for the user to select type of letters, numbers and/or special characters - local variable of its own (5 total local variables).

  if (window.confirm("Would you like to include uppercase letters?")) {
    return uppercase;
  } else if (window.confirm("Would you like to include lowercase letters?")) {
    return lowercase;
  } else if (window.confirm("Would you like to include numbers?")) {
    return number;
  } else if (window.confirm("Would you like to include special characters?")) {
    return specialCharacter;
  }
  // Add conditional so the user selects at least one password parameter above.

  if (!uppercase && !lowercase && !number && !specialCharacter) {
    return password;
  }
  // Add a conditional to concatenate the arrays or not based on what the user selects for their password characters. (if/else statement - this one will loop based on the user's length - call the function with the number chosen by user in a new array with empty brackets - include the math random code line in this for loop)

  for (var i = 0; i < arrayLength; i++) {
    if (lowercase)
  };

  return 'Angi' // Have the function return the final password array - convert array into a string.
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);