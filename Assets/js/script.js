// pseudocode

// password length - displays a prompt requesting user select password length
//  ** length prompt
//  ** number between 8 and 128
//  ** check for user input -- not a number check

// user confirms criteria including
//  ** uppercase, lowercase, special and numbers

// function will run and randomly select (x) character from a string that includes the selections

// user will receive an alert with the password once its generated

// ********************************************************* 
// add generate code that was provided
var generateBtn = document.querySelector("#generate");

// create variables for all characters that can be included
// uppercase || lowercase || numbers || special  
var upperChar = 'abcdefghijklmnopqrstuvwxyz';
var lowerChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '1234567890';
var symbol = '!@#$^&%*()+=-[]{}~|:<>?,.';

// Function to generate the password
function writePassword() {
// create more variables for possible combinations of password and to generate the password
// use placeholder for empty string with "";
var possibleChar = "";
var generatePass = ""; 

  // confirm uppercase letter
  var upperConfirm = window.confirm("Click OK to confirm including uppercase letters.");
  console.log(upperConfirm)
  // confirm lowercase letter
  var lowerConfirm = window.confirm("Click OK to confirm including lowercase letters.");
  console.log(lowerConfirm)
  // confirm number in password
  var numberConfirm = window.confirm("Click OK to confirm including numeric characters.");
  console.log(numberConfirm)
  // confirm symbol in password
  var symbolConfirm = window.confirm("Click OK to confirm including special characters.");
  console.log(symbolConfirm)

  // at least one confirm needs to be true to generate password
  if (upperConfirm == false && lowerConfirm == false && numberConfirm == false && symbolConfirm == symbolConfirm) {
    window.alert("Must select letter, number or symbol to continue.")
    console.log(true)
  }

  // if statements - what is confirmed or true -- put that string of numbers in possibleChar 
  // use += and for loop

   

  // add code that was provided 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // make sure to update HTML id from password to what I make this above

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var password = generatePassword();
