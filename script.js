class Calculator {
  constructor(externalOperand1ElementObject, externalOperand2ElementObject) {
    this.internalOperand1ElementObject = externalOperand1ElementObject;
    this.internalOperand2ElementObject = externalOperand2ElementObject;
    this.clear();
  }
  // functionality functions
  clear() {
    this.internalFirstOperandValue = "";
    this.internalSecondOperandValue = "";
    this.internalOperation = undefined;
    return "cleared mehn!";
  }
  delete() {}
  appendNumberToOperand2Display(number) {
    //   append the numbers as strings would be appended
    if (number === "." && this.internalSecondOperandValue.includes(".")) return;
    this.internalSecondOperandValue =
      this.internalSecondOperandValue.toString() + number.toString();
  }
  chooseOperation(externalOperation) {
    this.internalOperation = externalOperation;
    this.internalFirstOperandValue = this.internalSecondOperandValue;
    this.internalSecondOperandValue = "";
  }
  compute() {}
  updateDisplay() {
    this.internalOperand2ElementObject.innerText =
      this.internalSecondOperandValue;
    this.internalOperand1ElementObject.innerText =
      this.internalFirstOperandValue;
  }
}
// testing

//#region
// data bindings
const operand1ElementObject = document.querySelector("[data-previous-operand]");
const operand2ElementObject = document.querySelector("[data-current-operand]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
//#endregion

// create a cool calculator object
const coolCalculator = new Calculator(
  operand1ElementObject,
  operand2ElementObject
);

// create a function machine that attaches a click event to each number button
numberButtons.forEach((button) => {
  // for each button.. do this..
  button.addEventListener("click", () => {
    coolCalculator.appendNumberToOperand2Display(button.innerText);
    coolCalculator.updateDisplay();
  });
});

// create a function machine that attaches a click event to each operation button
operationButtons.forEach((button) => {
  // for each button.. do this..
  button.addEventListener("click", () => {
    coolCalculator.chooseOperation(button.innerText);
    coolCalculator.updateDisplay();
  });
});
