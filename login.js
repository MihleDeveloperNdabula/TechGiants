const loginform = document.getElementById('loginform');
const password = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

const passwordErrorMessage = 'Password must be at least 8 characters and contain at least one letter and one number.';
function validatePassword(password, id) {
  const pattern = /^(?=.*[A-Za-z])(?=.*[0-9])[!-~]{8,}$/; //this pattern defines the contraints explain in the error message above
  if(!pattern.test(password)){ //check that matches regex
	displayErrorMessage(id, passwordErrorMessage);
	return false; //needs to return so this function can also be used to prevent erroneous data from being submitted
  } else {
	const errrr = document.getElementById(id);
	if (errrr) errrr.textContent = ''; //empty out errrr field if it previously had content but data is now correct
  	return true;
  }
}


function displayErrorMessage(id, message) { //displays given errMessage in field with given id
  const el = document.getElementById(id);
  if (el) el.textContent = message;
}



loginform.addEventListener('submit', function(e) { //performs data validation to determine if form can be submitted
    const passwordToCheck = password.value; //get final val of password

    if (!validatePassword(passwordToCheck, 'error-message')) { //call helper function to validate and give correct output area for errors
      e.preventDefault(); // stop form submission
      password.focus(); //will be used later to indicate that password is the issue (once we are actually checking that the username exists as well)
    } else {
      errorMessage.textContent = ''; // clear any previous error messages 
    }
  });

document.addEventListener('DOMContentLoaded', () => { //as user types into password field, validate data
  const passwordInput = document.getElementById('password');
  
  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      validatePassword(passwordInput.value, 'error-message'); //error message will be displayed until password is valid, then dissapears
    });
  }
});