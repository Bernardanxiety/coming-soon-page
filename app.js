const form = document.getElementById('form');
const email = document.getElementById('email');
const errorIcon = document.getElementById('error-icon');
const errorMsg = document.getElementById('error-message');

form.addEventListener('submit', e => {
    let emailValue = email.value;
    if(!validateEmail(emailValue)) {
        e.preventDefault();
        errorIcon.style.opacity = 1;
        errorMsg.style.opacity = 1;
    }
    else {
        errorIcon.style.opacity = 0;
        errorMsg.style.opacity = 0;
    }

})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}