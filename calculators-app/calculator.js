// Get the result input element
const resultInput = document.getElementById("result");

// Function to handle button clicks
function handleButtonClick(value) {
  resultInput.value += value;
}

// Function to calculate the result
function calculateResult() {
  try {
    const result = eval(resultInput.value);
    resultInput.value = result;
  } catch (error) {
    resultInput.value = "Error";
  }
}

// Functionto clear the calculator
function clearCalculator() {
  resultInput.value = "";
}
