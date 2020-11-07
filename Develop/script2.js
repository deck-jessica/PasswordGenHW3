// listeners from prompts
var resultPw = document.getElementById('result');
var lengthPw = document.getElementById('length');
var uppercasePw = document.getElementById('uppercase');
var lowercasePw = document.getElementById('lowercase');
var mumbersPw = document.getElementById('numbers');
var symbolsPw = document.getElementById('symbols');
var generatePw = document.getElementById('generate');






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
    var length = prompt("Enter the length of your password between 8 and 128 characters:");
    length = parseInt(lengthPw.value);
    var hasLower = prompt("Do you want to include lowercase letters?");
    var hasUpper
});
