const fontSizeEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

fontSizeEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    spanTextEl.style.fontSize = event.currentTarget.value + "px";
}



