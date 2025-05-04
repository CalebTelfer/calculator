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
    let screenIsEmpty = isScreenEmpty();

    if(validInput(buttonPressed)) {

    //handle pressing button on empty screen.
        if (buttonIsNumber && screenIsEmpty) {
            displayScreen.textContent = buttonPressed;
        }

        if (buttonIsOperator && screenIsEmpty) {
            displayScreen.textContent = "0" + buttonPressed;
        }

        if (buttonPressed == "=" && screenIsEmpty) {
            displayScreen.textContent = "0";
        }

        if (buttonPressed == "DEL" && screenIsEmpty) {
            displayScreen.textContent = "0";
        }

        if (buttonPressed == "." && screenIsEmpty) {
            displayScreen.textContent = buttonPressed;
        }




        


    //handle screen has numbers / operators pressed already
        if (buttonIsNumber && !screenIsEmpty) {
            displayScreen.textContent = displayScreen.textContent + buttonPressed;
        }

        if (buttonIsOperator && !screenIsEmpty && buttonPressed != "=") {
            displayScreen.textContent = displayScreen.textContent + buttonPressed;
        }

        if (buttonPressed == "DEL" && !screenIsEmpty) {
            displayScreen.textContent = displayScreen.textContent.slice(0, -1);
        }


        if(buttonPressed == "=" && !screenIsEmpty) {
            let equationArray = Array.from(displayScreen.textContent);
            
            //find operator positions for bedmas
            let dividePositions = findOperatorIndexes(equationArray, "/");
            let multiplyPositions = findOperatorIndexes(equationArray, "x");
            let addPositions = findOperatorIndexes(equationArray, "+");
            let subtractPositions = findOperatorIndexes(equationArray, "-");

        }

    


    } else {displayScreen.textContent = "ERROR";} // if check for valid input failed.
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

function isOperator(buttonPressed) {
    if(
        buttonPressed == "." || 
        buttonPressed == "=" || 
        buttonPressed == "+" ||
        buttonPressed == "-" ||
        buttonPressed == "x" ||
        buttonPressed == "/") 
        {
            return true;
        } else {return false;}
}

function isScreenEmpty() {
    if(displayScreen.textContent == "" || displayScreen.textContent == "0" || displayScreen.textContent == "ERROR") {
        return true;
    } else {return false;}
}

function validInput(buttonPressed) {
    //input always made valid if the screen is empty.

    if(!isScreenEmpty()) {
        let lastButtonPressed = displayScreen.textContent.charAt(displayScreen.textContent.length - 1);

        if (isOperator(lastButtonPressed) && isOperator(buttonPressed)) {return false;} // cant have two operators beside each other
    
        if (lastButtonPressed == "." && buttonPressed == ".") {return false;} // cant have two decimals beside each other.
    
    
        //stop dividing by 0!!!!
        if(displayScreen.textContent.length >= 2 ) {
            let secondLastButtonPressed = displayScreen.textContent.charAt(displayScreen.textContent.length - 2);
    
            if (lastButtonPressed == "0" && secondLastButtonPressed == "/" && buttonPressed == "=") {
                return false;
            }
    
        }
    
    }

    return true;
}

function findOperatorIndexes(equationArray, operatorRequested) {
    return equationArray.reduce((operatorPos, currentItem, currentItemIndex) => {
        if(currentItem == operatorRequested) {
            operatorPos.push(currentItemIndex);
        }
        return operatorPos; //returns array of indexes in input array that has the operator requested
    }, []);

}