function divideAndMultiple() {

    let equationArray = Array.from(displayScreen.textContent);

    let num1 = "";
    let num2 = "";

    //collects left and right numbers on each side of EACH operator, divides them, and inserts back into equationArray.
    while(equationArray.indexOf("/") != -1 || equationArray.indexOf("x") != -1) {

        num1 = "";
        num2 = "";
        let indexOfOperator;

        let indexOfDivideOperator = equationArray.indexOf("/");
        let indexOfMultiplyOperator = equationArray.indexOf("x");

        let firstOperation = "";



        if(indexOfDivideOperator != -1 && indexOfMultiplyOperator !=-1) {
            if(indexOfDivideOperator > indexOfMultiplyOperator) {
                firstOperation = "x";
                indexOfOperator = indexOfMultiplyOperator;
            } else {
                firstOperation = "/";
                indexOfOperator = indexOfDivideOperator;
            }
        } else if(indexOfDivideOperator != -1) {
            firstOperation = "/";
            indexOfOperator = indexOfDivideOperator;
        } else {
            firstOperation = "x";
            indexOfOperator = indexOfMultiplyOperator;
        }



        let numLeftItems = indexOfOperator;
        let lastLeftNum = "";
        let counter = 1;

        //loop to collect all numbers to the left of the operator into num1 variable
        while (numLeftItems > 0) {
            if(isNumber(equationArray[indexOfOperator - counter])) {

                lastLeftNum = equationArray[indexOfOperator - counter];
                num1 = lastLeftNum + num1;

                lastleftNumIndex = indexOfOperator - counter;
                counter++;

            } else {break;}
            numLeftItems--;
        }


        let numRightItems = equationArray.length - indexOfOperator - 1;
        let lastRightNum = "";
        counter = 1;

        //loop to collect all numbers to the right of the operator into num2 variable
        while (numRightItems > 0) {
            if(isNumber(equationArray[indexOfOperator + counter])) {

                lastRightNum = equationArray[indexOfOperator + counter];
                num2 = num2 + lastRightNum;
                counter++;

            } else {break;}
            numRightItems--;
        }

        
        if (firstOperation == "/") {
            let quotient = (Math.round((num1 / num2) * 100) / 100).toString();
            let numElementsToSplice = num1.length + 1 + num2.length;
            equationArray.splice(indexOfOperator - num1.length, numElementsToSplice, ...quotient);
    
        } else {
            let product = (Math.round((num1 * num2) * 100) / 100).toString();
            let numElementsToSplice = num1.length + 1 + num2.length;
            equationArray.splice(indexOfOperator - num1.length, numElementsToSplice, ...product);
    
        }

        displayScreen.textContent = equationArray.join("");
    }

}

function addAndSubtract() {

    let equationArray = Array.from(displayScreen.textContent);

    let num1 = "";
    let num2 = "";

    //collects left and right numbers on each side of EACH operator, divides them, and inserts back into equationArray.
    while(equationArray.indexOf("+") != -1 || equationArray.indexOf("-") !=-1) {

        num1 = "";
        num2 = "";
        let indexOfOperator;

        let indexOfAddOperator = equationArray.indexOf("+");
        let indexOfSubtractOperator = equationArray.indexOf("-");

        let firstOperation = "";



        if(indexOfAddOperator != -1 && indexOfSubtractOperator !=-1) {
            if(indexOfAddOperator > indexOfSubtractOperator) {
                firstOperation = "-";
                indexOfOperator = indexOfSubtractOperator;
            } else {
                firstOperation = "+";
                indexOfOperator = indexOfAddOperator;
            }
        } else if(indexOfAddOperator != -1) {
            firstOperation = "+";
            indexOfOperator = indexOfAddOperator;
        } else {
            firstOperation = "-";
            indexOfOperator = indexOfSubtractOperator;
        }



        let numLeftItems = indexOfOperator;
        let lastLeftNum = "";
        let counter = 1;

        //loop to collect all numbers to the left of the operator into num1 variable
        while (numLeftItems > 0) {
            if(isNumber(equationArray[indexOfOperator - counter])) {

                lastLeftNum = equationArray[indexOfOperator - counter];
                num1 = lastLeftNum + num1;

                lastleftNumIndex = indexOfOperator - counter;
                counter++;

            } else {break;}
            numLeftItems--;
        }


        let numRightItems = equationArray.length - indexOfOperator - 1;
        let lastRightNum = "";
        counter = 1;

        //loop to collect all numbers to the right of the  operator into num2 variable
        while (numRightItems > 0) {
            if(isNumber(equationArray[indexOfOperator + counter])) {

                lastRightNum = equationArray[indexOfOperator + counter];
                num2 = num2 + lastRightNum;
                counter++;

            } else {break;}
            numRightItems--;
        }

        
        if (firstOperation == "+") {
            let sum = (Math.round((parseFloat(num1) + parseFloat(num2)) * 100) / 100).toString();
            let numElementsToSplice = num1.length + 1 + num2.length;
            equationArray.splice(indexOfOperator - num1.length, numElementsToSplice, ...sum);
    
        } else {
            let difference = (Math.round((num1 - num2) * 100) / 100).toString();
            let numElementsToSplice = num1.length + 1 + num2.length;
            equationArray.splice(indexOfOperator - num1.length, numElementsToSplice, ...difference);
    
        }

        displayScreen.textContent = equationArray.join("");
    }

}

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

            // B E D M A S
            divideAndMultiple();
            addAndSubtract();
        }

    


    } else {displayScreen.textContent = "ERROR";} // if check for valid input failed.
}

function isNumber(buttonPressed) {
    if(
        //buttonPressed != "." &&   //decimals should be considered numbers since its part of the number. validInput() ensures its entered right.
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