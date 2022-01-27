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
  delete() {
    //   a slice of the second operand
    const emptyCondition = this.internalSecondOperandValue === "";
    if (emptyCondition)
      return console.log(
        "yo Stupid! why are you pressing delete, when there is Nothing! to delete?"
      );
    this.internalSecondOperandValue = this.internalSecondOperandValue
      .toString()
      .slice(0, -1);
  }
  appendNumberToOperand2Display(number) {
    //   append the numbers as strings would be appended
    const tooManyDotsCondition =
      number === "." && this.internalSecondOperandValue.includes(".");
    if (tooManyDotsCondition)
      return console.log("yo! chill dude!! there is already a dot in there..");
    this.internalSecondOperandValue =
      this.internalSecondOperandValue.toString() + number.toString();
  }
  chooseOperation(externalOperation) {
    //   not valid if the operation starts the calculation
    const invalidOperatorUseCondition =
      this.internalSecondOperandValue === "" && this.internalOperation !== "";
    const validExpressionCondition = this.internalSecondOperandValue !== "";
    if (invalidOperatorUseCondition)
      return console.log(
        "wtf dude!! you cant start a calculation with an operator"
      );
    if (validExpressionCondition) {
      this.compute();
    }
    // update display to accommodate more calculations
    this.internalOperation = externalOperation;
    this.internalFirstOperandValue = this.internalSecondOperandValue;
    this.internalSecondOperandValue = "";
  }
  compute() {
    let answer;
    const operand1 = parseFloat(this.internalFirstOperandValue);
    const operand2 = parseFloat(this.internalSecondOperandValue);
    const emptyCondition = isNaN(operand1) || isNaN(operand2);
    if (emptyCondition)
      return console.log(
        "yo Stupid! why are you trying to compute nothing? wtf dude?!"
      );
    switch (this.internalOperation) {
      case "/":
        answer = operand1 / operand2;
        break;
      case "*":
        answer = operand1 * operand2;
        break;
      case "+":
        answer = operand1 + operand2;
        break;
      case "-":
        answer = operand1 - operand2;
        break;
      default:
        return;
    }
    this.internalSecondOperandValue = answer;
  }

  updateDisplay() {
    //   yh! the second operand is quite consistent
    this.internalOperand2ElementObject.innerText =
      this.internalSecondOperandValue;
    this.internalOperand1ElementObject.innerText =
      this.internalFirstOperandValue;
    //   but the first operand display always includes the operation as long as the operator is not null
    const operationIsNotNullCondition = this.internalOperation !== undefined;
    if (operationIsNotNullCondition) {
      this.internalOperand1ElementObject.innerText = `${this.internalFirstOperandValue} ${this.internalOperation}`;
    }
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

// Functions for Event Listening Buttons
// directly attach event listener since its not an array
allClearButton.addEventListener("click", () => {
  coolCalculator.clear();
  coolCalculator.updateDisplay();
});

// directly attach event listener since its not an array
deleteButton.addEventListener("click", () => {
  coolCalculator.delete();
  coolCalculator.updateDisplay();
});

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

// directly attach event listener since its not an array
equalsButton.addEventListener("click", () => {
  coolCalculator.compute();
  coolCalculator.updateDisplay();
});
