function append(value) {
  const display = document.getElementById('display');
  if (display.value === "00") display.value = "";
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = "00";
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    alert("Invalid Expression!");
    display.value = "00";
  }
}