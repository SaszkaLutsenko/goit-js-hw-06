const inputColorEl = document.querySelector('#validation-input');

console.log(inputColorEl.getAttribute('data-length'))

inputColorEl.addEventListener('blur', e => {

    if (e.target.value.langth === inputColorEl.getAttribute('data-length')){
        inputColorEl.classList.add('.valid' );
    }  else {
        inputColorEl.classList.contains('.valid' );
        inputColorEl.classList.remove('.invalid' );
    }
    inputColorEl.classList.add('.invalid')
});


