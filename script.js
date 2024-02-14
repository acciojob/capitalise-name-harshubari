//your JS code here. If required.
// script.js

// Function to capitalize the content of the input field
function capitalizeName() {
    var inputField = document.getElementById("fname");
    inputField.value = inputField.value.toUpperCase();
}
document.getElementById("fname").addEventListener("blur", capitalizeName);
