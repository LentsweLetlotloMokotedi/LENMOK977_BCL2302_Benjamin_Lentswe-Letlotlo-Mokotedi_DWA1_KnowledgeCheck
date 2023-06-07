const form = document.querySelector("[data-form]"); // Select the form element in the DOM using the attribute selector
const result = document.querySelector("[data-result]"); // Select the result element in the DOM using the attribute selector

form.addEventListener("submit", (event) => { // Add a submit event listener to the form
  event.preventDefault(); // Prevent the default form submission behavior

  const entries = new FormData(event.target); // Create a new FormData object from the form data
  const { dividend, divider } = Object.fromEntries(entries); // Extract the values of 'dividend' and 'divider' from the FormData object

  if (dividend === "" || divider === "") { // Check if either 'dividend' or 'divider' is empty
    result.innerText = "Division not performed. Both values are required in inputs. Try again"; // Display an error message in the result element
    return; // Exit the function
  }

  if (!isNumeric(dividend) || !isNumeric(divider)) { // Check if 'dividend' or 'divider' is not a valid numeric value
    console.error("Something critical went wrong. Please reload the page"); // Log an error message to the console
    result.innerText = "Division not performed. Invalid number provided. Try again"; // Display an error message in the result element
    return; // Exit the function
  }

  const quotient = dividend / divider; // Perform the division operation and assign the result to 'quotient'

  if (isWholeNumber(quotient)) { // Check if 'quotient' is a whole number
    result.innerText = quotient; // Display 'quotient' in the result element
  } else {
    result.innerText = Math.floor(quotient); // Round down 'quotient' to the nearest whole number and display it in the result element
  }
});

const isNumeric = value => { // Define a function 'isNumeric' that checks if a value is a valid numeric value
  const numericValue = Number(value); // Convert the value to a number using the Number() function
  return typeof numericValue === 'number' && !isNaN(numericValue) && Number.isInteger(numericValue) && numericValue >= 0; // Return true if the value is a number, not NaN, an integer, and greater than or equal to 0
};

function isWholeNumber(value) { // Define a function 'isWholeNumber' that checks if a value is a whole number
  return Number.isInteger(value); // Return true if the value is an integer
}
