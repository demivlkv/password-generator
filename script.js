// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// list arrays of all characters & symbols available to use to generate password
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "~"];

// minimum password character count
var charCount = 8;
var userChoice = [];

// list of user input variables
// var confirmUppercase = window.confirm("Would you like to include uppercase letters in the password?");
// var confirmLowercase = window.confirm("Would you like to include lowercase letters in the password?");
// var confirmNumbers = window.confirm("Would you like to include numbers in the password?");
// var confirmSymbols = window.confirm("Would you like to include special characters in the password?");

function generatePassword() {
    console.log("Testing, testing!");

    // step one: ask the user for their desired password length
    var charCount = window.prompt("How many characters would you like your password to be? Please choose a length between 8 and 128.");

    // step two: password length 8-128 characters
    if (isNaN(charCount) || charCount < 8 || charCount > 128) {
        window.alert("Character length must be a number between 8 - 128. Please try again.");
        return false;
    }

    // step three: include lowercase, uppercase, and/or special characters?

    // step four: validate input

    // step five: generate password based on user criteria

    // step five: display generated password!
    return "Testing testing~";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);