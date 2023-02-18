const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const bodyEl = document.querySelector('body');



btnChangeColor.addEventListener('click', onChangeColor );



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

;

function onChangeColor (event) {
  spanColor.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();  
};

