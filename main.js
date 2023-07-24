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
            display_input.innerHTML = "";
            display_input.innerHTML = "";
        } else if (value == 'backspace') {
            input = input.slice(0, -1);
            display_input.innerHTML = input;

        } else if (value == "=") {

        }
    })
}

