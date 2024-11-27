const name1 = document.getElementById('name1');
const fnameIn = document.getElementById('fnameIn');
const name2 = document.getElementById('name2');
const lnameIn = document.getElementById('lnameIn');
const email = document.getElementById('email');
const emailIn = document.getElementById('emailIn');
const pass = document.getElementById('password');
const passIn = document.getElementById('passIn');
const pass1 = document.getElementById('password1');
const pass1In = document.getElementById('pass1In');

const form = document.querySelector('form');

const fname_error = document.getElementById('fname_error');

const lname_error = document.getElementById('lname_error');

const email_error = document.getElementById('email_error');

const pass_error = document.getElementById('pass_error');

const pass1_error = document.getElementById('pass1_error');

const see =
document.getElementById('see');
const see1 =
document.getElementById('see1')


see.addEventListener('click', () => {
    if (passIn.type == "password") {
        passIn.type = "text";
        see.className = "fa fa-eye-slash";
    } else{
        passIn.type = "password";
        see.className = "fa fa-eye";
    }
})
see1.addEventListener('click', () => {
    if (pass1In.type == "password") {
        pass1In.type = "text";
        see1.className = "fa fa-eye-slash";
    } else{
        pass1In.type = "password";
        see1.className = "fa fa-eye";
    }
})



form.addEventListener('submit', (e)=>{
var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (fnameIn.value === '' || fnameIn.value == null || lnameIn.value === '' || lnameIn.value == null) {
        e.preventDefault();
        fname_error.innerHTML = "<";
        name1.style.borderColor = 'red'; 
        lname_error.innerHTML = ">";
        name2.style.borderColor = 'red';        
    }else {
        fname_error.innerHTML = '';
        name1.style.borderColor = 'green';
        lname_error.innerHTML = '';
        name2.style.borderColor = 'green';
    }
     
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
    
    if (pass1In.value !== passIn.value || pass1In.value == '') {
        
        pass1_error.innerHTML = "Passwords do not match";
        pass1.style.borderColor = 'red';
    }else {
        pass1_error.innerHTML = '';
        pass1.style.borderColor = 'green';
    }
    
})




