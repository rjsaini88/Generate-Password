// Assignment Code
var generateBtn = document.querySelector("#generate");


var alphabet = "abcdefghijklmnopqrstuvwxyz"
// console.log (alphabet)
var lowercase = alphabet.split('')
// console.log(lowercase)
var uppercase = lowercase.map(letter => letter.toUpperCase());
// console.log (uppercase)
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers)
var specialCharacters = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=".split('')
// console.log (specialCharacters)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getRandomInt(max) { 
  return Math.floor(Math.random()* max)

// Math.floor (Math.random)  
// Math.ceil()
}

function generatePassword() {

var passwordLength = prompt('How many characters would you like the password to be? (8-128)', '12') 

if (passwordLength === null)
  {return;}

else if(passwordLength < 8 || passwordLength > 128) {
// console.log("Make a valid selection")
alert("Please make a valid selection");
generatePassword()

}

else {

var useUppercase = confirm('Would you like to include uppercase letters?')

var useLowercase = confirm ('Would you like to include lowercase letters?')

var useNumbers = confirm ('Would you like to include numbers?')

var useSpecialCharcters = confirm ('Would you like to include special characters?')

console.log(passwordLength, useUppercase, useLowercase, useNumbers, useSpecialCharcters)
}
var potentialChars= []

if(useUppercase) {
potentialChars = potentialChars.concat(uppercase)
}

if(useLowercase) { 
  potentialChars = potentialChars.concat(lowercase)
  }

  if(useNumbers) {
    potentialChars = potentialChars.concat(numbers)
    }

    if(useSpecialCharcters) {
      potentialChars = potentialChars.concat(specialCharacters)
      }
console.log(potentialChars)


      var password = ''
      for (var i = 0; i < passwordLength; i++) {
// passowrd = password + potentialChars [getRandomInt(potentialChars.length)]
//         password = password + potentialChars
password = password + potentialChars[Math.floor(Math.random(potentialChars.length))]
// Math.floor(math.random()[potentialChars])

// potentialChars[Math.floor(math.random()]; 
 return password  

      }

    }

//


/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

/*
Need to create a function to generate password that meets certain criteria, so that it provides greater security
Use prompt() and confrim to gatgher user input. 
  Prompt Password length, select the  8-128 (12 default), limit inputs
  Confrim use lowercase, uppercase, numberic, and/or special characters.
  One character from each prompt should be selected
  Password displays on the screen.   
    */