const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const subtractHandler = () => {
  const newValue = parseInt(number.value) - 1;
  number.value = newValue;
  if (add.disabled === true) {
    add.disabled = false;
  }
  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }

  console.log(number.value);
}


const addHandler = () => {
  const newValue = parseInt(number.value) + 1;
  number.value = newValue;
  if (subtract.disabled === true) {
    subtract.disabled = false;
  }
  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }
  console.log(number.value);
};
console.log(number.value);
subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);


const resetButton = document.querySelector("sl-button");

const counterValueInput = document.querySelector(".counter_value");
function handleResetButtonClick() {
  counterValueInput.value = "0";
  alert("The counter has been reset.");
}
resetButton.addEventListener("click", handleResetButtonClick);




// let counterValue = 0;

// const subtractCount = () => {
//   counterValue--;
//   console.log("Current value:", counterValue);
//   if (counterValue <= MIN_NUMBER) {
//     console.log("Minimum value reached.");
//   }
// };

// const addCount = () => {
//   counterValue++;
//   console.log("Current value:", counterValue);
//   if (counterValue >= MAX_NUMBER) {
//     console.log("Maximum value reached.");
//   }
// };

// const resetCounter = () => {
//   counterValue = 0;
//   console.log("Counter reset.");
// };

// subtractCount(); // Example usage: decrement counter
// addCount();      // Example usage: increment counter
// resetCounter();  // Example usage: reset counter
