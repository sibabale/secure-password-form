var bar = document.querySelector('.bar');
var container = document.querySelector('.contianer');
var progressBar = document.querySelector('.progress-bar');
var showPassword = document.querySelector('.show-password');
var passwordInput = document.querySelector('.password-input');
var passwordLabel = document.querySelector('.password-label');
var inputContainer = document.querySelector('.input-container');
var passwordContainer = document.querySelector('.password-container');

var validationDotOne = document.querySelector('.validation-item-dot-1');
var validationDotTwo = document.querySelector('.validation-item-dot-2');
var validationCheckOne = document.querySelector('.validation-item-check-1');
var validationCheckTwo = document.querySelector('.validation-item-check-2');
var validationDotThree = document.querySelector('.validation-item-dot-3');
var validationCheckThree = document.querySelector('.validation-item-check-3');
var passwordStrengthText = document.querySelector('.password-strength-text');

var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var passwordText = passwordInput.value;

function hasUpperCase(string) {
    return string.toLowerCase() != string;
}

passwordContainer.addEventListener('click', function() {
    passwordInput.focus();
    passwordLabel.style.top = '5px';
    passwordInput.style.display = 'block';
    passwordLabel.style.fontSize = '12px';
    passwordLabel.style.position = 'absolute';
    passwordInput.style.position = 'absolute';
    passwordInput.style.marginTop = '5px';
})

showPassword.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'  
        showPassword.innerText = 'Hide'  
    } else {
        passwordInput.type = 'password'  
        showPassword.innerText = 'Show'  
    }
})

passwordInput.addEventListener('input', function() {
    const arr = [];

    if (passwordInput.value.length >= 8 ) {
        arr.push(1)        
        validationDotOne.style.display = 'none';
        document.querySelector('.validation-item-check-1').style.display = 'block';
    }  else {
        validationDotOne.style.display = 'block';
        document.querySelector('.validation-item-check-1').style.display = 'none';
    }
  
    if (hasUpperCase(passwordInput.value) ) {
        arr.push(2)        
        validationDotTwo.style.display = 'none';
        validationCheckTwo.style.display = 'block';
    }  else {
        validationDotTwo.style.display = 'block';
        validationCheckTwo.style.display = 'none';
    }

    if (format.test(passwordInput.value) ) {
        arr.push(3)
        validationDotThree.style.display = 'none';
        validationCheckThree.style.display = 'block';
    }   else {
        validationDotThree.style.display = 'block';
        validationCheckThree.style.display = 'none';
    }

    switch (arr.length) {
        case 0:
            bar.style.width = '0px'
            passwordStrengthText.innerText = "";
            break;
        case 1:
            bar.style.width = '50px'
            bar.style.background = 'chocolate'
            passwordStrengthText.innerText = "Weak";
            break;
        case 2:
            bar.style.width = '100px'
            bar.style.background = '#d0ce3e'
            passwordStrengthText.innerText = "Medium";
            break;
        case 3:
            bar.style.width = '120px'
            bar.style.background = '#41ce55'
            passwordStrengthText.innerText = "Excellent";
            break;
        default:
            break;
    }
    
})
