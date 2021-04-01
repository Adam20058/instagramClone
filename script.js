// now here's some dynamic magic for my form

const form = document.getElementById('form');
const email = document.getElementById('email');
const full_name = document.getElementById('fullname');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// event listener
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
  // gets all the values from forms input

  const usernameValue = username.value;
	const emailValue = email.value;
	const passwordValue = password.value;
	const password2Value = password2.value;
	const fullnameValue = full_name.value;


  // here the values get validated

  // email
  if(emailValue === '')  {
		errorValidation(email, 'Error: PleaseFill In Email');
	}  else if (!isEmail(emailValue) ) {
		errorValidation(email, 'invalid email');
	} else {
		successValidation(email);
	}

  // full name
	if(fullnameValue === '') {
		errorValidation(fullname, 'Error: Please Fill In Full Name');
	} else {
		successValidation(fullname);
	}

  // username
	if(usernameValue === '') {
		errorValidation(username, 'Error: Please Fill In Desired User Name');
	} else {
		successValidation(username);
	}

  // password
  if(passwordValue === '') {
		errorValidation(password, 'Error: Please Fill In Desired Password');
	} else {
		successValidation(password);
	}
  // password 2
  if(password2Value === '') {
		errorValidation(password2, 'Error: Please Fill In Desired Password');
	} else if (passwordValue != password2Value) {
		errorValidation(password2, `Error: Passwords don't match`);
	} else {
		successValidation(password2);
	}
}

function errorValidation(input, message) {
	const validationForm = input.parentElement;
	const small = validationForm.querySelector('small');
	validationForm.className = 'input_field error';
	small.innerText = message;
}

function successValidation(input) {
	const validationForm = input.parentElement;
	validationForm.className = 'input_field success';
}
	
function isEmail(email) {
  let charactComb = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return charactComb.test(email);
}


// no idea how to add number validation in same field as email I'll try this next time

// function isPhone(email) {
//   let numComb = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
//   return numComb.test(email);
//}