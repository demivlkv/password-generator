// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Testing, testing!");

    // step one: ask the user for their desired password length

    // step two: password length 8-128 characters

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