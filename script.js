const pwField = document.querySelector('#pwd');
const pwConfField = document.querySelector('#pwd_cnf');
const pwBubble = document.querySelector('div.pw-bubble')

//grab all requirement li's
const charReq = document.querySelector('li.char');
const capReq = document.querySelector('li.cap');
const numReq = document.querySelector('li.num');
let passValidity = false;

//confirmation icon appears after focusout
pwField.addEventListener('focusout', () => {
    pwField.classList.add('viewed-by-user');
});

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

//evaluate characters requirements
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