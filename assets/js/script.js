// Assignment Code
// By: Jose Sanchez-Capo

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  // Users will be Prompted to select password length, at least eight characters, and no more than 128 characters.

  var length_prompt = 1; // conter to define user attempts
  var password_length_response = Number(prompt("How many characters do you want to use for the length of password; Password must have at least 8 characters but no more than 128 characters."));

  do {



    if (password_length_response < 8 || password_length_response > 128 || isNaN(password_length_response)) {

      // Criteria not meet; Alert the user that must enter a number between 8 and 128. Tell the user only have two tries.
      alert("Please be sure the following criteria are met. Must be a number between 8 and 128.  Remaining attempts : " + length_prompt++ + " of 2");

    } else {

      break;

    }

    // Display message when user reach more than two tries.

    if (length_prompt > 2) { alert("max try reaced; try next time") };

  } while (true && length_prompt < 3)

  console.log(password_length_response);

  // Users must confirm if we want to use an upper case letters in the password.

  var password_uppercase_reponse = confirm("Do you want to use uppercase, e.g., 'A' letters in your password? Click cancel if not, and continue.");

  if (password_uppercase_reponse) {

    password_uppercase_reponse = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  } else {

    password_uppercase_reponse = "";

  }

  console.log(password_uppercase_reponse);

  // Users must confirm if we want to use an lower case letters in the password.

  var password_lowercase_response = confirm("Do you want to use lowercase, e.g., 'a' letters in your password? Click cancel if not, and continue.");

  if (password_lowercase_response) {

    password_lowercase_response = "abcdefghijklmnopqrstuvwxyz";

  } else {

    password_lowercase_response = "";

  }
  console.log(password_lowercase_response);
  // Users must comfirm if we wnat to use nnumber as part of the password

  var password_numbers_response = confirm("Do you want to use number as part of the password, e.g., '123'?  Click cancel if not, and continue.");

  if (password_numbers_response) {

    password_numbers_response = "12345678";

  } else {

    password_numbers_response = "";

  }

  console.log(password_numbers_response);7

  // Users must confirm if we want to use special characters as part of the password

  var password_special_characters_response = confirm("Do you want to use special characters as part of the password, e.g., '#@$%'?  Click cancel if not, and continue.");

  if (password_special_characters_response) {

    password_special_characters_response = "!@#$%^&*()";

  } else {

    password_special_characters_response = "";

  }

  console.log(password_special_characters_response);

  // User Criteria

  var password_criteria = password_uppercase_reponse + password_lowercase_response + password_numbers_response + password_special_characters_response;

  // Generate the password based on user criteria
  function generatePassword() {

    var the_password = '';
    for (i = 1; i <= password_length_response; i++) {

      var character = Math.floor(Math.random() * password_criteria.length + 1);

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