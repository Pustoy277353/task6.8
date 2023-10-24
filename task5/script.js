duplicateField = document.querySelector("#duplicateField");
form = document.querySelector("form");
input = form.querySelector("input");

form.addEventListener("submit", function(event) {
    event.preventDefault();   
    inputValue = input.value; 
    duplicateField.textContent = inputValue;   
    input.value = "";
});