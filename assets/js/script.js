// Assignment Code
// By: Jose Sanchez-Capo

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {


  // Users will be Prompted to select password length, at least eight characters, and no more than 128 characters.
  
  var length_prompt = 1; // conter to define user attempts

  do {

    const password_length_response = Number(prompt("How many characters do you want to use for the length of password; Password must have at least 8 characters but no more than 128 characters."));
    if (password_length_response < 8 || password_length_response > 128 || isNaN(password_length_response)) {

     // Criteria not meet; Alert the user that must enter a number between 8 and 128. Tell the user only have two tries.
      alert("Please be sure the following criteria are met. Must be a number between 8 and 128.  Remaining attempts : " + length_prompt++ + " of 2");

    } else {

      break;

    }

    // Display message when user reach more than two tries.

    if (length_prompt > 2) {alert("max try reaced; try next time")};

  } while (true && length_prompt < 3)


   // 





  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



  // Users will be Prompted to choose character types criteria to be included in the password (lowercase, uppercase, numeric, and/or special characters).



}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

