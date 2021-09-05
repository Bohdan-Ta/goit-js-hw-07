//=====================
const inputNameEl = document.querySelector('#name-input')
const inputNoNameEl = document.querySelector('#name-output')
inputNameEl.addEventListener('input', inputName)

function inputName(el) {
    const name = inputNameEl.value;
    name === '' ? inputNoNameEl.textContent = 'незнакомец' : inputNoNameEl.textContent = name;
  
}
//====================