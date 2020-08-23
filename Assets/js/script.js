// pseudocode

// password length - displays a prompt requesting user select password length
//  * length prompt
//  * number between 8 and 128
//  * check for user input -- not a number check

// user confirms criteria including uppercase, lowercase, special and numbers

// function will run and randomly select (x) character from a string that includes the selections

// user will see password in box on application once its generated


// add generate code that was provided
var generateBtn = document.querySelector("#generate");

// create variables for all characters that can be included
// uppercase || lowercase || numbers || special  
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var number = '1234567890';
var symbol = '!@#$^&%*()+=-[]{}~|:<>?,.';

// function to generate the password
function writePassword() {
  // create more variables for possible combinations of password and to generate the password
  // use placeholder for empty string with "";
  var possibleChar = "";
  var generatePass = "";

  // confirm password length between 8 and 128 characters
  var passwordLength = window.prompt("How many characters would you like your password to contain? Please select a number between 8 and 128.")
  // console.log(passwordLength);

  // if password length is less than or equal to 8 || equal to or greater than 128 -- use 7 and 129 so 8 and 128 appear
  if (passwordLength <= 7 || passwordLength >= 129) {
    window.alert("Not valid, please click generate password again.")
    return
  }

  // confirm uppercase letter
  var upperConfirm = window.confirm("Click OK to confirm including uppercase letters.");
  // console.log(upperConfirm);

  // confirm lowercase letter
  var lowerConfirm = window.confirm("Click OK to confirm including lowercase letters.");
  // console.log(lowerConfirm);

  // confirm number in password
  var numberConfirm = window.confirm("Click OK to confirm including numeric characters.");
  // console.log(numberConfirm);

  // confirm symbol in password
  var symbolConfirm = window.confirm("Click OK to confirm including special characters.");
  // console.log(symbolConfirm);

  // at least one confirm needs to be true to generate password
  if (upperConfirm == false && lowerConfirm == false && numberConfirm == false && symbolConfirm == false) {
    window.alert("Must select letter, number or symbol to continue. Click generate password again.")
  }

  // if statements - what is confirmed or true -- put that string of numbers in possibleChar 
  // use += inside for loop
  if (upperConfirm == true) {
    possibleChar += upperChar
  }

  if (lowerConfirm == true) {
    possibleChar += lowerChar
  }

  if (numberConfirm == true) {
    possibleChar += number
  }

  if (symbolConfirm == true) {
    possibleChar += symbol
  }
  // console.log(possibleChar);

  // create for loop that generates randomness of the password
  for (var i = 0; i < passwordLength; i++) {
    generatePass += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length));
    console.log(generatePass);
  }

  var passwordText = document.querySelector("#password");
  // update below to include password generator variable I created
  passwordText.value = generatePass;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var password = generatePassword();
