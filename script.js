// pseudocode

// variables that decide the lowercase, uppercase, numeric, and/or special characters
var generateBtn = document.querySelector("#password");

// function with prompt to ask user if they want to include uppercase
// ** Would you like your password to include uppercase letters?

// function with prompt to ask user if they want to include uppercase
// ** Would you like your password to include lowercase letters?

// function with prompt to determine if user wants to include numbers
// ** Would you like your password to include numbers?

// function with prompt to see if user wants to include special characters
// ** Would you like your password to include special characters?

// function with prompt for length of the password
// ** Enter a number from 8-128 to set the length of your password

// function used to take all the input from the previous functions and generate password

// validate input and at least one character type should be selected (This should be length)
//  ** Please enter a number between 8-128

// password is generated that matches the selected criteria

// displayed in an alert or written to the page




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
