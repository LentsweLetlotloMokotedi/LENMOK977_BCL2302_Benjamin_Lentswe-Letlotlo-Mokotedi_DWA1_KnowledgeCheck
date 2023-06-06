const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }
  if (!isNumeric(dividend) || !isNumeric(divider)) {
    console.error("Something critical went wrong. Please reload the page");
    result.innerText = "Division not perfomed. Invalid number provided. Try again";
    return;
  }
  const quotient = dividend / divider;
  if (isWholeNumber(quotient)) {
    result.innerText = quotient;
  } else {
    result.innerText = Math.floor(quotient);
  }
});
const isNumeric = value => {
    const numericValue = Number(value);
    return typeof numericValue === 'number' && !isNaN(numericValue) && Number.isInteger(numericValue) && numericValue >= 0;
  };
  
  
function isWholeNumber(value) {
  return Number.isInteger(value);
}