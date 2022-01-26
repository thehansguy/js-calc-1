class Calculator {
  constructor(externalOperand1ElementObject, externalOperand2ElementObject) {
    this.internalOperand1ElementObject = externalOperand1ElementObject;
    this.internalOperand2ElementObject = externalOperand2ElementObject;
    this.clear();
  }
  // functionality functions
  clear() {
    this.internalOperand1Value = "";
    this.internalOperand2Value = "";
    this.operation = undefined;
    return "cleared mehn!";
  }
  delete() {}
  appendNumberToOperand2Display(number) {
    //   append the numbers as strings would be appended
    if (number === "." && this.internalOperand2Value.includes("."))
      return (this.internalOperand2Value =
        this.internalOperand2Value.toString() + number.toString());
  }
  chooseOperation(operation) {}
  compute() {}
  updateDisplay() {
    this.internalOperand2ElementObject.innerText = this.internalOperand2Value;
    this.internalOperand1ElementObject.innerText = this.internalOperand1Value;
  }
}
// variable testing
const num1 = 1;
const num2 = 2;
const ans = num1 + num2;

const testElement = document.querySelector("displayArea__operand1Zone");

// data bindings
const operand1ElementObject = document.querySelector("[data-previous-operand]");
const operand2ElementObject = document.querySelector("[data-current-operand]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");

// create a cool calculator object
const coolCalculator = new Calculator(
  operand1ElementObject,
  operand2ElementObject
);

// create a function machine that attaches an event listener to each number button
numberButtons.forEach((button) => {
  // for each button.. do this..
  button.addEventListener("click", () => {
    coolCalculator.appendNumberToOperand2Display(button.innerText);
    coolCalculator.updateDisplay();
  });
});
