const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    event.currentTarget.value;
    output.textContent = event.currentTarget.value;
}

