// Assignment code here

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

function generatePassword() {
  //1. Asking password length 
  var passwordLength = parseInt(prompt("Please enter number of charactors for password."));

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter between 8 and 128 characters.");
    generatePassword();
  } 
  
    else if (passwordLength > 8 || passwordLength < 128) {

    //2. confirming Character type 
    var includesUpper = confirm("Would you like to include uppercase?");
    var includesLower = confirm("Would you like to include lowercase?");
    var includesNumeric = confirm("Would you like to include numbers?");
    var includesSpecial = confirm("Would you like to include special characters?");
  
    // 3. Either one option 
    if (includesUpper === false && includesLower === false && includesNumeric === false && includesSpecial === false) {
      alert("Please select a valid character type.")
      includesUpper = confirm("Would you like to include uppercase?");
      includesLower = confirm("Would you like to include lowercase?");
      includesNumeric = confirm("Would you like to include numbers?");
      includesSpecial = confirm("Would you like to include special characters?");
    }
  
    //4. Random mixed letters , number and special 
    var charset = ""
    var result = ""
  
    if (includesUpper === true) {
      charset = charset + upper;
    }
    if (includesLower === true) {
      charset = charset + lower;
    }
    if (includesNumeric === true) {
      charset = charset + number;
    }
    if (includesSpecial === true) {
      charset = charset + special;
    }
  
    //Loop & randomize
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      result = result + charset.charAt(Math.floor(Math.random() * n));
    }
    return result;

  }   
  };


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
