// Assignment Code
// By: Jose Sanchez-Capo

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  // Prompt the user for the Password Length

  for (var attempts = 1; attempts <= 3; attempts++) {
    var password_length_response = prompt('How many characters do you want to use for the length of password; Password must have at least 8 characters but no more than 128 characters.', '8')
    if (password_length_response < 8 || password_length_response > 128 || isNaN(password_length_response)) {

      alert('Must be a number between 8 and 128. You have, ' + (3 - attempts) + ' remaining attempts.');

      if (attempts === 3) {
        return;
      }

    } else

      break;

  }

  console.log(password_length_response);
  console.log('good; move forward');


  // Addtitional criteria to be used in the password

  var character_type_selection = 0;

  do {

    // Display Message to the user is no characted type is selected 

    if (character_type_selection > 0) {
      alert('You must select at least one character type');
    }

    // Users must confirm if we want to use an upper case letters in the password.

    var password_uppercase_reponse = confirm("Do you want to use uppercase, e.g., 'A' letters in your password? Click cancel if not, and continue.");

    if (password_uppercase_reponse) {

      password_uppercase_reponse = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    }

    console.log(password_uppercase_reponse);

    // Users must confirm if we want to use an lower case letters in the password.

    var password_lowercase_response = confirm("Do you want to use lowercase, e.g., 'a' letters in your password? Click cancel if not, and continue.");

    if (password_lowercase_response) {

      password_lowercase_response = "abcdefghijklmnopqrstuvwxyz";

    }

    console.log(password_lowercase_response);

    // Users must comfirm if we wnat to use nnumber as part of the password

    var password_numbers_response = confirm("Do you want to use number as part of the password, e.g., '123'?  Click cancel if not, and continue.");

    if (password_numbers_response) {

      password_numbers_response = "12345678";

    }

    console.log(password_numbers_response);

    // Users must confirm if we want to use special characters as part of the password

    var password_special_characters_response = confirm("Do you want to use special characters as part of the password, e.g., '#@$%'?  Click cancel if not, and continue.");

    if (password_special_characters_response) {

      password_special_characters_response = "!@#$%^&*()";

    }

    character_type_selection++;
    console.log(password_special_characters_response);

  } while (password_uppercase_reponse === false && password_lowercase_response === false && password_numbers_response === false && password_special_characters_response === false);

  console.log('moving foward');
  
  // User Criteria

  var password_criteria = password_uppercase_reponse + password_lowercase_response + password_numbers_response + password_special_characters_response;
  
  // Generate the password based on user criteria
  function generatePassword() {
  
    var the_password = '';
    for (i = 1; i <= password_length_response; i++) {
  
      var character = Math.floor(Math.random() * password_criteria.length);
  
      the_password += password_criteria.charAt(character)
  
    }
    return the_password;
  }
  
  // Call funtion to generate the password based on user criteria

  var password = generatePassword()
  
  // Write Password to the UI

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);