// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Testing, testing!");

    // list arrays of all characters & symbols available to use to generate password
    var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbol = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "~"];

    // minimum password character count
    var characterCount = 8;
    var userChoice = [];
    var passwordArr = [];

    // ask the user for their desired password length
    var characterCount = window.prompt("How many characters would you like your password to be? Please choose a length between 8 and 128.");

    // password length 8-128 characters
    if (isNaN(characterCount) || characterCount < 8 || characterCount > 128) {
        window.alert("Character length must be a number between 8 - 128. Please try again.");
        return false;
    }

    // list of user input variables
    var confirmLowercase = window.confirm("Would you like to include lowercase letters in the password?");
    var confirmUppercase = window.confirm("Would you like to include uppercase letters in the password?");
    var confirmNumbers = window.confirm("Would you like to include numbers in the password?");
    var confirmSymbols = window.confirm("Would you like to include special characters in the password?");

    // include lowercase, uppercase, and/or special characters
    if (confirmLowercase) {
        userChoice = userChoice.concat(alphaLower);
    }
    if (confirmUppercase) {
        userChoice = userChoice.concat(alphaUpper);
    }
    if (confirmNumbers) {
        userChoice = userChoice.concat(number);
    }
    if (confirmSymbols) {
        userChoice = userChoice.concat(symbol);
    }

    // validate input
    console.log(userChoice);

    // generate password based on user criteria
    var password = "";
    for (var i = 0; i < characterCount; i++) {
        userInput = Math.floor(Math.random() * userChoice.length);
        password = password + passwordArr[userInput];
    }

    // display generated password!
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);