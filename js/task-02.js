const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newEl = ingredients.map((ingredient) => { 
  document.createElement('li')
  newEl.classList.add('item')
  newEl.textContent = ingredient
  
return newEl
})
const navEl = document.querySelector('#ingredients')

navEl.appendChild(...newEl)

console.log(navEl)

