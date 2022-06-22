// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // list arrays of all characters & symbols available to use to generate password
    var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbol = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "~"];

    // list of user input variables
    var confirmUppercase = window.prompt("Would you like to include uppercase letters in the password?");
    var confirmLowercase = window.prompt("Would you like to include lowercase letters in the password?");
    var confirmNumbers = window.prompt("Would you like to include numbers in the password?");
    var confirmSymbols = window.prompt("Would you like to include special characters in the password?");

    
    // test prompt to ask for user's desired password length
    var passwordLength = window.prompt("How many characters long would you like your password to be? Please choose between 8 and 128 characters.");
    if (passwordLength === "" || passwordLength === "null") {
        window.alert("You need to provide a valid answer! Please try again.");
        return generatePassword();
    }

    // options to add lowercase, uppercase, numeric, and/or special characters
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function firstPromptTest() {
    window.prompt("How many characters long would you like your password to be? Please choose between 8 and 128 characters.")
}