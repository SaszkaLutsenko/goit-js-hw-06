
const form = document.querySelector('.login-form');

form.addEventListener('submit', submitForm);

function submitForm (e) {
    e.preventDefault()
    const {
        elements:{email, password },
    } = e.currenTarget
    if(email.value === '' || password.value === ''){
        return ('Please fill in all the fields!')
    };
  
    const userInformation = { email: email.value, Password: password.value }
    console.log (userInformation)
    e.currenTarget.reset();
   
};


