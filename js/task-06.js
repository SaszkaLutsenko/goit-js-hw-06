const textInput = document.querySelector('#validation-input')
console.log(textInput.getAttribute('data-length'))
textInput.addEventListener('blur', event => {
	if (Number(event.target.value.length) === textInput.getAttribute('data-length')) {
		textInput.classList.remove('invalid')
		textInput.classList.add('valid')
	} else {
		textInput.classList.remove('valid')
		textInput.classList.add('invalid')
	}
})

