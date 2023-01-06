const pwField = document.querySelector('#pwd');
const pwConfField = document.querySelector('#pwd_cnf');
const pwBubble = document.querySelector('div.pw-bubble')
const pwConfBubble = document.querySelector('div.pw-cnf-bubble')

//grab all requirement li's for validation feedback
const charReq = document.querySelector('li.char');
const capReq = document.querySelector('li.cap');
const numReq = document.querySelector('li.num');
let passValidity = false;

//input confirmation icon appears only after focusout
pwField.addEventListener('focusout', () => {
    pwField.classList.add('viewed-by-user');
});
pwConfField.addEventListener('input', () => {
    if(pwField.value.length > 0){
        pwConfField.classList.add('viewed-by-user')
        pwConfBubble.classList.add('viewed-by-user')
    }
});

pwConfField.addEventListener('focusout', () => {
    if(pwField.value.length > 0){
        pwConfField.classList.add('viewed-by-user')
        pwConfBubble.classList.add('viewed-by-user')
    }
});

pwConfField.addEventListener('input',() => {
    pwConfField.classList.add('viewed-by-user')
    pwConfBubble.classList.add('viewed-by-user')
})

pwField.addEventListener('input',() => {
    const enteredValue = pwField.value;
    console.log(enteredValue)
    const charValidity = charCountCheck(enteredValue);
    const capValidity = capCheck(enteredValue);
    const numValidity = numCheck(enteredValue);

    if (charValidity && capValidity && numValidity) {
        pwField.classList.add('valid');
        passValidity = true;
    } else {
        pwField.classList.remove('valid');
    }
})

//evaluate reqs
function charCountCheck(text) {
    if (text.length >= 8) {
        charReq.classList.add('valid');
        return true
    }
    else {
        charReq.classList.remove('valid');
    }
}

function capCheck(text) {
    const capRegex = /[A-Z]/
    if (capRegex.test(text)){
        capReq.classList.add('valid');
        return true
    } else {
        capReq.classList.remove('valid');
    }
}

function numCheck(text) {
    const numRegex = /[0-9]/
    if (numRegex.test(text)) {
        numReq.classList.add('valid');
        return true;
    } else {
        numReq.classList.remove('valid');
    }
}

//password confirmation check
document.addEventListener('input', () => {
    const password = pwField.value;
    const confirmation = pwConfField.value;
    if(password == confirmation && password.length > 0) {
        pwConfField.classList.add('valid')
        pwConfBubble.classList.add('hide')
    } else if (password.length == 0 && confirmation.length == 0){
        pwConfBubble.classList.add('hide')
    } else {
        pwConfField.classList.remove('valid')
        pwConfBubble.classList.remove('hide')
    }
})


