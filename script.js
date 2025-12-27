const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstValue = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      firstValue = "";
      operator = "";
      display.textContent = "0";
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput === "") return;
      operator = value;
      firstValue = currentInput;
      currentInput = "";
      return;
    }

    if (value === "=") {
      if (currentInput === "" || operator === "") return;
      const secondValue = currentInput;
      const result = calculate(firstValue, secondValue, operator);
      display.textContent = result;
      currentInput = result;
      operator = "";
      return;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});

function calculate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (op) {
    case "+": return (a + b).toString();
    case "-": return (a - b).toString();
    case "*": return (a * b).toString();
    case "/": return b === 0 ? "Error" : (a / b).toString();
    default: return "";
  }
}
