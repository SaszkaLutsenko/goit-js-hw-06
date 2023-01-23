const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output > span');


inputEl.addEventListener('input', onInputElInput);

function onInputElInput(event){
if(inputEl === ''){
    spanEl = 'Anonymous'
};
spanEl.textContent = event.currentTarget.value;
};
