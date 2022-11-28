// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Use of composition to make object we can traverse to determine user preferences
var characterTypeChoices = {
  lowercase: lowerCasedCharacters,
  uppercase: upperCasedCharacters,
  numeric: numericCharacters,
  special: specialCharacters
}

// // Function to prompt user for password options
function getPasswordOptions() {

var options = {
  pwLength: 0,
  characterTypes: []
}

options.pwLength = prompt("How long would you like your password to be?" + "\n(NOTE. Must be between " + 10 + " and " + 64 + " characters.)");

  // If user hits "Cancel" then alert parting note & stop password generator
  if (options.pwLength == "null" || options.pwLength == null || options.pwLength == "") { 
    alert("Bye bye!");
  }

   // If user enters password length lese than 10 or greater than 64 the alert that password must be min. of 10 & max of 64 characters  
   if (options.pwLength < 10 || options.password > 64) {
    alert("Password must be between " + 10 + " and " + 64);
    getPasswordOptions();
   }
  }

// Keep prompting for characterTypes if none have been chosen
while (options.characterTypes.length < 1) {
  
  // Iterate through choices & prompt user to determine whether each should be included
  
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);