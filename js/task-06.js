const inputColorEl = document.querySelector('#validation-input');

const dataLength = Number(inputColorEl.dataset.length)

function onFormText (e){
    if(e.currentTarget.value.trim().length === dataLength){
		inputColorEl.classList.remove('invalid')
        inputColorEl.classList.add('valid')
    } else {
        inputColorEl.classList.remove('valid')
        inputColorEl.classList.add('invalid')
    }
}

