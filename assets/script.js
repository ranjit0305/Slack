function mouseOverText(elementId) {
    var element = document.getElementsByClassName(elementId)[0];
    if (element) {
        element.style.color = 'blue';
    }
}

function mouseOutText(elementId) {
    var element = document.getElementsByClassName(elementId)[0];
    if (element) {
        element.style.color = 'black';
    }
}

function bringToFront(element) {
    element.classList.add('front');
}

function sendToBack(element) {
    element.classList.remove('front');
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    var emailInput = document.querySelector('.enter').value.trim();

    if (emailInput === "") {
        alert("Email address is required.");
        return false;
    }

    if (!validateEmail(emailInput)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

document.querySelector('.sbox').addEventListener('click', function(event) {
    event.preventDefault();

    if (validateForm()) {
        alert("Form submitted successfully.");
    }
});
