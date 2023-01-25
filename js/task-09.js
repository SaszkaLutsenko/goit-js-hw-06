
  const colorBtn = document.querySelector('change-color')
  const bodyEl = document.querySelector('body')
  const colorName = document.querySelector('.color')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

colorBtn.addEventListener('click', e =>{
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorName.textContent = color;
});

