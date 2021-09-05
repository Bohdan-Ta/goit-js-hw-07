//==============
const decButton = document.querySelector('[data-action="decrement"]');
const incButton = document.querySelector('[data-action="increment"]');
const valueCountNum = document.querySelector('#value');
let total = 0;
const increment = () => (valueCountNum.textContent = total += 1);
const decrement = () => (valueCountNum.textContent = total -= 1);
decButton.addEventListener("click", decrement);
incButton.addEventListener("click", increment);
//===============