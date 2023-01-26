
const form = document.querySelector('.login-form');

form.addEventListener('submit', submitForm);

function submitForm (e) {
    e.preventDefault()
    const {
        elements: {email, pasword },
    } = e.currenTarget
    if(email.value === '' || pasword.value === ''){
        return ('Please fill in all the fields!')
    };
  
    const userInformation = { email: email.value, Password: password.value }
    console.log (userInformation)
    e.currenTarget.reset();
   
};


