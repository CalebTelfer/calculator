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