// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = uppercase.map(letter => letter.toUpperCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ['(', '~’, ‘!’, ‘@’, ‘#’, ‘$’, ‘%’, ‘^’, ‘&’, ‘*’, ‘_’, ‘-‘, ‘+’, ‘=’, ‘`’, ‘|’, ‘\’, ‘(‘, ‘)’, ‘{‘, ‘}’, ‘[‘, ‘]’, ‘:’, ‘;’, ‘"’,]

// '<', '>', ',', '.', '?', '/', ')', ']'];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

var passwordLength = prompt('How many characters would you like the password to be? (8-128)', '12')

var useUppercase = confirm('Would you like to include uppercase letters?')

var useLowercase = confirm ('Would you like to include lowercase letters?')

var useNumbers = confirm ('Would you like to include numbers?')

var useSpecialCharcters = confirm ('Would you like to include special characters?')

console.log(passwordLength, useUppercase, useUppercase, useNumbers, useSpecialCharcters)
 
var potentialChars= []

if(useUppercase) {
potentialChars = potentialChars.concat(uppercase)
}

if(useLowercase) {
  potentialChars = potentialChars.concat(lowercase)
  }

  if(useNumbers) {
    potentialChars = potentialChars.concat(number)
    }

    if(useSpecialCharcters) {
      potentialChars = potentialChars.concat(special)
      }


      var password= ''
      for (var i = 0; i < passwordLength; i++) {
password = password + potentialChars 
      }
}