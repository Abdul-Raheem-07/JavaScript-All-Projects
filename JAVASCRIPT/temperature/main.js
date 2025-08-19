const textbox = document.getElementById("textbox");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
const result = document.getElementById("result");

function convert() {
    let temp = Number(textbox.value);

    if (fahrenheit.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } 
    else if (celsius.checked) {
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    } 
    else {
        result.textContent = "Select a unit";
    }
}
