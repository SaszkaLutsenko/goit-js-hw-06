
const form = document.querySelector('login-form');

form.addEventListener('submit', );

function submitForm (event) {
    event.preventDefault()
    const {
        elements: {email, pasword },
    } = event.currenTarget
    if(email.value === '' || pasword === ''){
        return ('All forms mast be fill in')
    };
    console.log ( `emaile ${email.value}`);
    console.log ( `pasword ${pasword.value}`);
    event.currenTarget.reset();

};