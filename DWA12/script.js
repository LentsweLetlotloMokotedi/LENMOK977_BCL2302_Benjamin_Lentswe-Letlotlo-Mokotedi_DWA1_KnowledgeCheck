// redux

// Define constants
const MAX_NUMBER = 15; // Sets the maximum allowed number to 15.
const MIN_NUMBER = -5; // Sets the minimum allowed number to -5.
const STEP_AMOUNT = 1; // Defines the step amount for incrementing or decrementing the counter.

// Define action types
const ActionTypes = {
  INCREMENT: "INCREMENT", // Action type for incrementing the counter.
  DECREMENT: "DECREMENT", // Action type for decrementing the counter.
  RESET: "RESET", // Action type for resetting the counter.
};

// Define action creators
function incrementCounter() { // Creates an action to increment the counter.
  return { type: ActionTypes.INCREMENT };
}

function decrementCounter() { // Creates an action to decrement the counter.
  return { type: ActionTypes.DECREMENT };
}

function resetCounter() { // Creates an action to reset the counter.
  return { type: ActionTypes.RESET };
}

// Define reducer function
function counterReducer(state = 0, action) { // Defines a reducer function to handle state changes based on actions.
  switch (action.type) {
    case ActionTypes.INCREMENT: 
      return state + STEP_AMOUNT;
    case ActionTypes.DECREMENT: 
      return state - STEP_AMOUNT;
    case ActionTypes.RESET: 
      return 0;
    default:
      return state; // Returns the current state if the action type is unknown.
  }
}

// Create a Redux store
const store = Redux.createStore(counterReducer); // Creates a Redux store using the counterReducer function.

// Update the UI with the initial state
let currentValue = store.getState(); // Retrieves the initial state from the store.
function updateUI() { 
  currentValue = store.getState(); 
  number.value = currentValue.toString(); 

  if (currentValue <= MIN_NUMBER) { // Disables the subtract button if the current value is less than or equal to the minimum allowed number.
    subtract.disabled = true;
  } else if (currentValue >= MAX_NUMBER) {
    add.disabled = true;
  } else { 
    subtract.disabled = false;
    add.disabled = false;
  }

  console.log(currentValue); 
}

// Subscribe to state changes and update the UI
store.subscribe(updateUI)

// Attach event listeners to the buttons
const number = document.querySelector('[data-key="number"]'); 
const subtract = document.querySelector('[data-key="subtract"]'); 
const add = document.querySelector('[data-key="add"]'); 

subtract.addEventListener("click", () => { // Attaches a click event listener to the 'subtract' button.
  store.dispatch(decrementCounter());
});

add.addEventListener("click", () => { // Attaches a click event listener to the 'add' button.
  store.dispatch(incrementCounter()); 
});

const resetButton = document.querySelector("sl-button"); // Retrieves the 'resetButton' element from the UI.
resetButton.addEventListener("click", () => { // Attaches a click event listener to the 'resetButton'.
  store.dispatch(resetCounter()); 
  alert("The counter has been reset."); // Displays an alert message when the button is clicked.
});

// Initialize the UI
updateUI(); // Calls the updateUI function to initialize the UI with the initial state.








// const MAX_NUMBER = 15;
// const MIN_NUMBER = -5;
// const STEP_AMOUNT = 5;
// const number = document.querySelector('[data-key="number"]');
// const subtract = document.querySelector('[data-key="subtract"]');
// const add = document.querySelector('[data-key="add"]');
// const subtractHandler = () => {
//   const newValue = parseInt(number.value) - 1;
//   number.value = newValue;
//   if (add.disabled === true) {
//     add.disabled = false;
//   }
//   if (newValue <= MIN_NUMBER) {
//     subtract.disabled = true;
//   }

//   console.log(number.value);
// }


// const addHandler = () => {
//   const newValue = parseInt(number.value) + 1;
//   number.value = newValue;
//   if (subtract.disabled === true) {
//     subtract.disabled = false;
//   }
//   if (newValue >= MAX_NUMBER) {
//     add.disabled = true;
//   }
//   console.log(number.value);
// };
// console.log(number.value);
// subtract.addEventListener('click', subtractHandler);
// add.addEventListener('click', addHandler);


// const resetButton = document.querySelector("sl-button");

// const counterValueInput = document.querySelector(".counter_value");
// function handleResetButtonClick() {
//   counterValueInput.value = "0";
//   alert("The counter has been reset.");
// }
// resetButton.addEventListener("click", handleResetButtonClick);






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
