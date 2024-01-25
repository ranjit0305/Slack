// Modify the mouseOver and mouseOut functions to take an element ID as a parameter
function mouseOverText(elementId) {
    var element = document.getElementsByClassName(elementId)[0]; // Assuming there's only one element with the given class
    if (element) {
        element.style.color = 'blue';
    }
}

function mouseOutText(elementId) {
    var element = document.getElementsByClassName(elementId)[0]; // Assuming there's only one element with the given class
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

