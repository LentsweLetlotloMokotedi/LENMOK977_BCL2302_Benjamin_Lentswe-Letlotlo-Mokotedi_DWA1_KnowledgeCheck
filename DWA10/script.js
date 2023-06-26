const MAX_NUMBER = 15; // The maximum allowed number is set to 15.
const MIN_NUMBER = -5; // The minimum allowed number is set to -5.
const STEP_AMOUNT = 1; // Each time the number is changed, it will increase or decrease by 1.
const number = document.querySelector('[data-key="number"]'); // The variable 'number' is assigned to an HTML element with a specific attribute value of 'number'.
const subtract = document.querySelector('[data-key="subtract"]'); // The variable 'subtract' is assigned to an HTML element with a specific attribute value of 'subtract'.
const add = document.querySelector('[data-key="add"]'); // The variable 'add' is assigned to an HTML element with a specific attribute value of 'add'.

const subtractHandler = () => { // This function is called when the 'subtract' button is clicked.
  const newValue = parseInt(number.value) - 1; // The value in the 'number' element is reduced by 1.
  number.value = newValue; // The new value is updated in the 'number' element.
  if (add.disabled === true) { // If the 'add' button is disabled, it is enabled.
    add.disabled = false;
  }
  if (newValue <= MIN_NUMBER) { // If the new value is less than or equal to the minimum allowed number, the 'subtract' button is disabled.
    subtract.disabled = true;
  }
};

const addHandler = () => { // This function is called when the 'add' button is clicked.
  const newValue = parseInt(number.value) + 1; // The value in the 'number' element is increased by 1.
  number.value = newValue; // The new value is updated in the 'number' element.
  if (subtract.disabled === true) { // If the 'subtract' button is disabled, it is enabled.
    subtract.disabled = false;
  }
  if (newValue >= MAX_NUMBER) { // If the new value is greater than or equal to the maximum allowed number, the 'add' button is disabled.
    add.disabled = true;
  }
};

subtract.addEventListener('click', subtractHandler); // When the 'subtract' button is clicked, the 'subtractHandler' function is called.
add.addEventListener('click', addHandler); // When the 'add' button is clicked, the 'addHandler' function is called.

const resetButton = document.querySelector("sl-button"); // The variable 'resetButton' is assigned to an HTML element with the tag name 'sl-button'.

const counterValueInput = document.querySelector(".counter_value"); // The variable 'counterValueInput' is assigned to an HTML element with the class name 'counter_value'.
function handleResetButtonClick() { // This function is called when the 'resetButton' is clicked.
  counterValueInput.value = "0"; // The value of the 'counterValueInput' element is set to "0".
  alert("The counter has been reset."); // An alert message is displayed saying "The counter has been reset."
}
resetButton.addEventListener("click", handleResetButtonClick); // When the 'resetButton' is clicked, the 'handleResetButtonClick' function is called.

