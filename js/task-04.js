
const decrementBtn = document.querySelector('decrement');
const incrementBtn = document.querySelector('increment');
const span = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementBtnClick);

function onDecrementBtnClick () {
    span.textContent = counterValue + 1;
};


incrementBtn.addEventListener('click', onIncrementBtnClick);

function onIncrementBtnClick () {
    span.textContent = counterValue - 1;
};