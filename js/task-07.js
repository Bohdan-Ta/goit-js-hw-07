//=======================
const controlSizeRf = document.querySelector('#font-size-control')
const textSizeRf = document.querySelector('#text')

const setFontSize = (event) => {
    textSizeRf.style.fontSize = `${event.target.value}px`;
};
controlSizeRf.addEventListener('input', setFontSize);
//=========================