const inputColorEl = document.querySelector('#validation-input');

const dataLength = Number(inputColorEl.dataset.length)

function onFormText (e){
    if(e.currentTarget.value.trim().length === dataLength){
        inputColorEl.classList.add('#validation-input.valid')
    } else {
        inputColorEl.classList.remove('#validation-input.valid')
        inputColorEl.classList.add('#validation-input.invalid')
    }
}

