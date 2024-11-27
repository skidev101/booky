const email = document.getElementById('email');
const emailIn = document.getElementById('emailIn');
const pass = document.getElementById('password');
const passIn = document.getElementById('passIn');

const form = document.querySelector('form');


const see =
document.getElementById('see');



see.addEventListener('click', () => {
    if (passIn.type == "password") {
        passIn.type = "text";
        see.className = "fa fa-eye-slash";
    } else{
        passIn.type = "password";
        see.className = "fa fa-eye";
    }
})



form.addEventListener('submit', (e)=>{
var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
     
    if (!emailIn.value.match(email_check)) {
        e.preventDefault()
        email_error.innerHTML = "Enter your Email";
        email.style.borderColor = 'red';
    }else {
        email_error.innerHTML = '';
        email.style.borderColor = 'green';
    }
    
    
    if (passIn.value.length <= 6) {
        e.preventDefault()
        pass_error.innerHTML = "Password must be more than 6 characters";
        pass.style.borderColor = 'red';
    } else {
        pass_error.innerHTML = '';
        pass.style.borderColor = 'green';
    }
    
    
})
