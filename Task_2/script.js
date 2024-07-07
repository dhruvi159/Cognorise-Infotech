let currentNumber = '';
let previousNumber = '';
let operation = null;

const display = document.getElementById('display');

function appendNumber(number) {
    if (currentNumber === '' && number === '0') return;
    currentNumber += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        computeResult();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function updateDisplay() {
    display.innerText = currentNumber || previousNumber || '0';
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function computeResult() {
    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentNumber = result;
    operation = null;
    previousNumber = '';
    updateDisplay();
}
