// Creating the calculator construct
const calculator = {
    displayValue: "0",
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

// Function to change display using displayValue
function updateDisplay() {
    const display = document.querySelector(".calc__output"); // collects element from HTML
    display.value = calculator.displayValue; // assigns element to display *value* not changing child elements
}
// Resets display to default on load
updateDisplay();

// Accessing element value and assigning eventListener(to all buttons), updates displayValue
const keys = document.querySelector(".calc__input");
keys.addEventListener("click", (event) => {
    const { target } = event;

    // If element !btn exit function
    if (!target.matches("button")) {
        return;
    }
    // Operators
    if (target.classList.contains("calc__input--btn-ops")) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    // Decimal
    if (target.classList.contains("calc__input--btn-dot")) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
});
// Everything else, being numbers
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue =
            displayValue === "0" ? digit : displayValue + digit;
    }

    // console.log(calculator);
}
// Handling the decimal, if first operand complete and operator used will place "0." in second operand
function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = "0.";
        calculator.waitingForSecondOperand = false;
        return;
    }
    // If the `displayValue` property does not contain a decimal point it will append
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    // Destructure the properties on the calculator object
    const { firstOperand, displayValue, operator } = calculator;
    // `parseFloat` converts the string contents of `displayValue` to a floating-point number
    const inputValue = parseFloat(displayValue);

    // verify that `firstOperand` is null and that the `inputValue` is not a `NaN` value
    if (firstOperand === null && !isNaN(inputValue)) {
        // Update the firstOperand property
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    // console.log(calculator);
}

// Calculates and returns them to `firstOperand`
function calculate(firstOperand, secondOperand, operator) {
    if (operator === "+") {
        return firstOperand + secondOperand;
    } else if (operator === "-") {
        return firstOperand - secondOperand;
    } else if (operator === "*") {
        return firstOperand * secondOperand;
    } else if (operator === "/") {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}
