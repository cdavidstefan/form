const form = document.getElementById('form');
const password1EL = document.getElementById('password1');
const password2EL = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using the constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    };
    // Chech to see if passwords match
    if (password1EL.value === password2EL.value) {
        passwordsMatch = true;
        password1EL.style.borderColor = 'green';
        password2EL.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1EL.style.borderColor = 'red';
        password2EL.style.borderColor = 'red';
        return;
    };
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    };
};

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do something with user data
    console.log(user);
};


function processFormData(e) {
    e.preventDefault();
    // Validate form itself 
    validateForm();
    // Submit data if Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    };
};


// Event Listeners
form.addEventListener('submit', processFormData);

// what i learned from this project: HTML validation, JS validation, CSS pseudo-classes, debugger, breakpoints
// make constants for each HTML element we want to interact with.
// cand avem un buton cu type = input, chit ca evenimentul e un click, se executa pe formular in sine
// doesn't pass data anywhere, just console

// when we are sending data over the internet we must make sure the website is https. security reasons
// we want high entropy passwords. 