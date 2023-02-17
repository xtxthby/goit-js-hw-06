const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const liContainerEL = document.querySelector('#ingredients');
const elements = ingredients.map(element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  liEl.classList = 'item';

  return liEl;
})

liContainerEL.append(...elements);



