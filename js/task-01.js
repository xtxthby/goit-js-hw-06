const allItems = document.querySelectorAll('.item');
let resalt = allItems.length;

console.log('Namber of categories:', resalt);

allItems.forEach((element) => {
    const elementTitle = element.querySelector('h2').textContent;
    const liElements = element.querySelectorAll('li');
    const numberLiElements = liElements.length;
    console.log('Categori:', elementTitle);
    console.log('Elevtyns:', numberLiElements);
});

