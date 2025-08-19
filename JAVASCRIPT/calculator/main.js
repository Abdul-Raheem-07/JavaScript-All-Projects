const display = document.getElementById("display");

function appendToDisplay(char) {
  // Prevent multiple dots in the current number segment
  if (char === ".") {
    // Split by operators to get last number chunk
    const lastNum = display.value.split(/[\+\-\*\/]/).pop();
    if (lastNum.includes(".")) return;
  }

  display.value += char;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    // Evaluate the expression safely
    const result = eval(display.value);
    display.value = result;
  } catch (e) {
    alert("Invalid Expression");
    clearDisplay();
  }
}
