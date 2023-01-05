const pwField = document.querySelector('#pwd');
const pwConfField = document.querySelector('#pwd_cnf');
const pwBubble = document.querySelector('div.pw-bubble')


pwField.addEventListener('focusout', () => {
    pwField.style.backgroundImage = 'url(/img/tick-red-icon.png)';
});