const keys = document.querySelectorAll('.keys');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";

for (let key of keys) {
    const value = key.dataset.key;

    key.addEventListener('click', () => {
        if (value == 'clear') {
            input = "";
            firstNumber = "";
            operator = "";
            secondNumber = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        } else if (value == 'backspace') {
            input = input.slice(0, -1);
            display_input.innerHTML = input;

        } else if (value == "=") {
            if (firstNumber && operator && secondNumber) {
                const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                display_output.innerHTML = result;
                input = result.toString();
                firstNumber = input;
                operator = "";
                secondNumber = "";
            }
        } else {
            input += value;
            display_input.innerHTML = input;

            if (isNaN(parseFloat(input))) {
                operator = value;
                firstNumber = input.slice(0, -1);
                input = "";
            } else if (operator) {
                secondNumber = input;
            }
        }
    });
}
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        // Add more cases for other operators as needed.
        default:
            return NaN;
    }
}

