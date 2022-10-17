// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
// Add event listener to generate button

var alphabet = "abcdefghijklmnopqrstuvwxyz";
// console.log (alphabet)
var lowercase = alphabet.split("");
// console.log(lowercase)
var uppercase = lowercase.map((letter) => letter.toUpperCase());
// console.log (uppercase)
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers)
var specialCharacters = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=".split("");
// console.log (specialCharacters)

//To generate password, go through password criteria.

function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like the password to be? (8-128)",
    "12"
  );

  if (passwordLength === null) {
    return "Your Secure Password";
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please make a valid selection");
    generatePassword();
  } else {
    var useUppercase = confirm("Would you like to include uppercase letters?");

    var useLowercase = confirm("Would you like to include lowercase letters?");

    var useNumbers = confirm("Would you like to include numbers?");

    var useSpecialCharcters = confirm(
      "Would you like to include special characters?"
    );
  }

  console.log(
    passwordLength,
    useUppercase,
    useLowercase,
    useNumbers,
    useSpecialCharcters
  );

  var potentialChars = []; //Create a variable that creates an array of allowed characters.

  if (useUppercase) {
    potentialChars = potentialChars.concat(uppercase);
  }

  if (useLowercase) {
    potentialChars = potentialChars.concat(lowercase);
  }

  if (useNumbers) {
    potentialChars = potentialChars.concat(numbers);
  }

  if (useSpecialCharcters) {
    potentialChars = potentialChars.concat(specialCharacters);
  }

  //  if (useUppercase && useLowercase && useNumbers && useSpecialCharcters === null) {
  //   alert("Please make a valid selection");
  if (potentialChars === undefined) {
    alert("Please make a valid selection");
    generatePassword();
  }

  console.log(potentialChars);

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }

  var password = ""; //Run for loop to run iterations equal to password length to select character from potentialchars array.
  for (var i = 0; i < passwordLength; i++) {
    // password = password + potentialChars[getRandomInt(potentialChars.length)]; This methods works, getRandomInc function must be active.

    password =
      password +
      potentialChars[Math.floor(Math.random() * potentialChars.length)]; //This also works
    console.log(password);
  }

  return password;
}

/*
Need to create a function to generate password that meets certain criteria, so that it provides greater security
Use prompt() and confrim to gatgher user input. 
  Prompt Password length, select the  8-128 (12 default), limit inputs
  Confrim use lowercase, uppercase, numberic, and/or special characters.
  One character from each prompt should be selected
  Password displays on the screen.   
    */
