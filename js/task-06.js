const textInput = document.querySelector('#validation-input')
console.log(textInput.getAttribute('data-length'))
textInput.addEventListener('blur', event => {
	if (event.target.value.length == textInput.getAttribute('data-length')) {
		textInput.classList.add('#validation-input.valid')
		if (textInput.classList.contains('#validation-input.invalid')) {
			textInput.classList.remove('#validation-input.invalid')
		}
	} else {
		if (textInput.classList.contains('#validation-input.valid')) {
			textInput.classList.remove('#validation-input.valid')
		}
		textInput.classList.add('#validation-input.invalid')
	}
})

