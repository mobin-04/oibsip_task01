let displayValue = "";

function appendToDisplay(val) {
  displayValue += val;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculateResult() {
  try {
    let result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById("display").value = displayValue;
  } catch (error) {
    displayValue = "";
    document.getElementById("display").value = "Error";
  }
}
