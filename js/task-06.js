//========================


const input = document.getElementById("validation-input");
input.addEventListener('blur', invalidInput);
function invalidInput(number) {
    const inputOk = input.dataset.length;
    number.currentTarget.value.length === Number(inputOk) ? input.classList = 'valid' : input.classList = 'invalid';
}