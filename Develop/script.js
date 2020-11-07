// create arrays to hold variable "libraries" for each character type
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCase = ['0','1','2','3','4','5','6','7','8','9'];
var specialCase = ['~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','?','{','}','<','>'];








// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword() {
    var length = parseInt(prompt("Enter the length of your password between 8 and 128 characters:"));
    if (!length) {
      alert("this needs a value");
    } else if ( length < 8 || length > 128 ) {
      length = parseInt(prompt("Choose a number between 8 and 128"));
    }  else {
      confirmNumber = confirm("Would you like to include numbers?");
      confirmCharacter = confirm("Would you like to include special characters?");
      confirmUpper = confirm("Would you like to include uppercase letters?");
      confirmLower = confirm("Would you like to include lowercase letters?");
    }
    password.innerText = generatePassword(confirmNumber, confirmCharacter, confirmUpper, confirmLower, length);
});




