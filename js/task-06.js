const inputColorEl = document.querySelector('#validation-input');
const inputLangth = inputColorEl.dataset.langth;

inputColorEl.addEventListener('blur', onInputColoeElLangth);

function onInputColoeElLangth (event){
    if (event.currentTargetvalue.langth === inputLangth){
        inputColorEl.classList.remove('invalid' );
        inputColorEl.classList.add('valid' );
    }  else {
        inputColorEl.classList.remove('valid' );
        inputColorEl.classList.add('invalid' );
    }
    
};
