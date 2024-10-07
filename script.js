let currentInput = "";
let operator = "";
let firstNumber = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById("result").value = currentInput;
}

function setOperator(op) {
  if (currentInput === "") return;
  operator = op;
  firstNumber = currentInput;
  currentInput = "";
}


function calculate() {
  if (currentInput === "" || firstNumber === "") return;
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Error";
      break;
  }

  document.getElementById("result").value = result;
  currentInput = result;
  operator = "";
  firstNumber = "";
}

function clearResult() {
  currentInput = "";
  operator = "";
  firstNumber = "";
  document.getElementById("result").value = "";
}
