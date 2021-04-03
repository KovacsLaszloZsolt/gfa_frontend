'use strict';

const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordAgain = document.getElementById('password-again');
const submitButton = document.getElementById('signup');

userName.addEventListener('invalid', (e) => {
    e.preventDefault();
    validationUserName(e.target);
})

userName.addEventListener('input', (e) => {
    e.preventDefault();
    validationUserName(e.target);
});

email.addEventListener('invalid', (e) => {
    e.preventDefault();
    console.dir(e.target);
    validationEmail(e.target);
});

email.addEventListener('input', (e) => {
    e.preventDefault();;
    validationEmail(e.target);
});

function validationUserName(target) {
    const userNameError = document.querySelector('.username-error');

    if (target.validity.valueMissing) {
        target.setCustomValidity('Ne hagyd uresen!');
        showError(userNameError, target.validationMessage);

    } else if (target.validity.tooShort) {
        target.setCustomValidity('Username has to be at least 8 ')
        showError(userNameError, target.validationMessage);
    }
    else {
        target.setCustomValidity('');
        showError(userNameError, target.validationMessage)
    };
}

function validationEmail(target) {
    const emailError = document.querySelector('.email-error');
    if (target.validity.typeMismatch) {
        target.setCustomValidity('Adj meg egy ervenyes email cimet');
        showError(emailError, target.validationMessage);
    } else {
        target.setCustomValidity('');
        showError(emailError, target.validationMessage)
    };
}

function showError(field, errMessage) {
    field.innerHTML = errMessage;
}

const regFormElement = document.querySelector('.signup-form');

regFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = e.target.checkValidity();
    // e.target.reportValidity();

    const passwordElement = document.getElementById('password');
    const passwordAgainElement = document.getElementById('password-again');
    const passwordErrorElement = document.querySelector('.password-error');
    const passwordAgainErrorElement = document.querySelector('.passwordagain-error');

    if (passwordElement.value !== passwordAgainElement.value) {
        isValid = false;
        passwordElement.setCustomValidity('Két jelszó értéke különbözik');
        showError(passwordErrorElement, passwordElement.validationMessage);
        passwordAgainElement.setCustomValidity('Két jelszó értéke különbözik');
        showError(passwordAgainErrorElement, passwordAgainElement.validationMessage);
    } else {
        passwordElement.setCustomValidity('');
        passwordAgainElement.setCustomValidity('');
    }

    if (isValid) {
        e.target.submit();
    }
});