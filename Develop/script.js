// create arrays to hold variable "libraries" for each character type
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCase = ['0','1','2','3','4','5','6','7','8','9'];
var specialCase = ['~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','?','{','}','<','>'];








// Assignment Code
var generateBtn = document.querySelector("#generate");


//function to generate password based on returned criteria
function generatePW(){
		var pwLength = parseInt(prompt("Enter the length of your password between 8 and 128 characters:"));
		if (!pwLength) {
		  alert("this needs a value");
		  return;
		} if ( pwLength < 8 || pwLength > 128 ) {
		  pwLength = parseInt(prompt("Choose a number between 8 and 128"));
			return;
		}  

		let confirmNumber = confirm("Would you like to include numbers?");
		let confirmCharacter = confirm("Would you like to include special characters?");
		let confirmUpper = confirm("Would you like to include uppercase letters?");
		let confirmLower = confirm("Would you like to include lowercase letters?");
		
		
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 




