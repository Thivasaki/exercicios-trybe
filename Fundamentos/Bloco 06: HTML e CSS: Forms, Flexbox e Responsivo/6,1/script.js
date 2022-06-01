const button = document.getElementById('submit');
const clear = document.getElementById('clear');

function preventFromDefault(event) {
    event.preventDefault();
}

function clearAll() {
    const inputs = document.querySelectorAll('input');

    for (let i = 0; let < inputs.length; i += 1) {
        inputs[i].value = '';
        inputs[i].checked = false;
    }
    document.querySelector('textarea') = ''
}

button.addEventListener('click', preventFromDefault);
clear.addEventListener('click', clearAll)