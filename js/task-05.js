const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');


inputEl.addEventListener('input', e =>{
    spanEl.textContent = e.target.value

    if (e.target.value = ''){
        spanEl.textContent = 'Anonymous'
    }
})



