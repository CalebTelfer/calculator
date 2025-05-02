// 1. Create functions for addition, subtraction, multiplying, and dividing.

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// 3.

function operate(operator, num1, num2) {
    switch (operator) {
        case "+": {
            add(num1, num2);
            break;
        }

        case "-": {
            subtract(num1, num2);
            break;
        }

        case "*": {
            multiply(num1, num2);
            break;
        }

        case "/": {
            divide(num1, num2);
        }
    }
}

const buttons = document.querySelectorAll("button");
const displayScreen = document.querySelector("h2");


buttons.forEach(button => {
    button.addEventListener("click", function() {buttonClick(button);}
)})

function buttonClick(button) {
    let buttonPressed = button.textContent;

    let buttonIsNumber = isNumber(buttonPressed);
    let buttonIsOperator = isOperator(buttonPressed);
    let screenIsEmpty = isScreenEmpty(displayScreen.textContent);

}

function isNumber(buttonPressed) {
    if(
        buttonPressed != "." &&
        buttonPressed != "=" &&
        buttonPressed != "+" &&
        buttonPressed != "-" &&
        buttonPressed != "x" &&
        buttonPressed != "/" &&
        buttonPressed != "DEL") {
            return true;
        } else {return false;}
}

function isOperator(buttonPressed) {} {
    if(
        buttonPressed == "." || 
        buttonPressed == "=" || 
        buttonPressed == "+" ||
        buttonPressed == "-" ||
        buttonPressed == "x" ||
        buttonPressed == "/" ||
        buttonPressed == "DEL") {
            return true;
        } else {return false;}
}

function isScreenEmpty(screenText) {
    if(displayScreen.textContent == "") {
        return true;
    } else {return false;}
}