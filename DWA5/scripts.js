// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// User Story 1: Starting program state
result.innerText = "NO calculation performed";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // User Story 3: Validation when values are missing
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // User Story 4: An invalid division should log an error in the console
  if (!isNumeric(dividend) || !isNumeric(divider)) {
    console.error("Something critical went wrong. Please reload the page");
    result.innerText = "Division not performed. Invalid number provided. Try again";
    return;
  }

  // User Story 5: Providing anything that is not a number should crash the program
  try {
    if (divider === "0") {
      throw new Error("Division by zero is not allowed");
    }

    const quotient = dividend / divider;
    if (isWholeNumber(quotient)) {
      // User Story 2: Dividing numbers result in a whole number
      result.innerText = quotient;
    } else {
      result.innerText = Math.floor(quotient);
    }
  } catch (error) {
    console.error(error);
    result.innerText = "Division not performed. Invalid number provided. Try again";
  }
});

const isNumeric = (value) => !isNaN(value);

function isWholeNumber(value) {
  return Number.isInteger(value);
}
