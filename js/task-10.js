const inputNumber = document.querySelector('[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divBoxes = document.getElementById('boxes');

inputNumber.addEventListener('input', toogleValue);
createBtn.addEventListener('click', () => {createBoxes(Number(inputNumber.value));});
destroyBtn.addEventListener('click', destroyBoxesMarkup);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


let inputValue = 0;
function toogleValue(event) {
  inputValue = event.currentTarget.value;
}


function createBoxes(amount) {
  let divArray = [];
  let sizeSquare = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeSquare += 10;
    const divTag = document.createElement('div');
    divTag.classList = 'item';
    divTag.style.height = `${sizeSquare}px`;
    divTag.style.width = `${sizeSquare}px`;
    divTag.style.marginRight = '30px';
    divTag.style.marginBottom = '30px';
    divTag.style.backgroundColor = getRandomHexColor();
    divArray.push(divTag);
  }
  return divBoxes.append(...divArray);
}


function destroyBoxesMarkup() {
  inputNumber.value = '';
  return (divBoxes.innerHTML = '');
}