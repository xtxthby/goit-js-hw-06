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


// let inputValue = 0;
// function toogleValue(event) {
//   inputValue = event.currentTarget.value;
// }


// function createBoxes(amount) {
//   let divArray = [];
//   let sizeSquare = 30;
//   for (let i = 0; i < amount; i += 1) {
//     sizeSquare += 10;
//     const divTag = document.createElement('div');
//     divTag.classList = 'item';
//     divTag.style.height = `${sizeSquare}px`;
//     divTag.style.width = `${sizeSquare}px`;
//     divTag.style.marginRight = '30px';
//     divTag.style.marginBottom = '30px';
//     divTag.style.backgroundColor = getRandomHexColor();
//     divArray.push(divTag);
//   }
//   return divBoxes.append(...divArray);
// }


// function destroyBoxesMarkup() {
//   inputNumber.value = '';
//   return (divBoxes.innerHTML = '');
// }





// --- next variant -------------------------------------------

// // let inputValue = 0;
// // function toogleValue(event) {
// //   inputValue = event.currentTarget.value;
// // }
// createBtn.addEventListener('click', () => {
//   //console.log(inputNumberEl.value);
//   if (
//     Number(inputNumber.value.trim()) > Number(inputNumber.max) ||
//     Number(inputNumber.value.trim()) < Number(inputNumber.min)
//   ) {
//     alert('Please enter number from 1 to 100');
//   } else {
//     createBoxes(inputNumber.value.trim());
//   }
//   inputNumber.value = '';
// });
// destroyBtn.addEventListener('click', destroyBoxes);


// function destroyBoxes() {
//   inputNumber.value = '';
//   divBoxes.innerHTML = '';
// }

// function createBoxes(amount) {
//   let defaultSize = 30;
//   const boxesArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     defaultSize += 10 * i;
//     const div = document.createElement('div');
//     div.classList = 'item';
//     div.style.width = `${defaultSize}px`;
//     div.style.height = `${defaultSize}px`;
//     div.style.marginRight = '30px';
//     div.style.marginBottom = '30px';
//     div.style.backgroundColor = getRandomHexColor();
//     boxesArr.push(div);
//     console.log('arr length', boxesArr.length);
//   }
//   return divBoxes.append(...boxesArr);
// }






// --- next variant function createBoxes ()--------------------

let inputValue = 0;
function toogleValue(event) {
  inputValue = event.currentTarget.value;
}
function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const div = `<div class="item" style="display:block;
    margin-right:30px;
    argin-bottom: 30px;
    background-color: ${getRandomHexColor()}; width: ${size}px;
    height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  divBoxes.insertAdjacentHTML('beforeend', boxesArr.join(''));
}
function destroyBoxes() {
  inputNumber.value = '';
  divBoxes.innerHTML = '';
}