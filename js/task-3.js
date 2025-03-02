const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', handlerInput);

function handlerInput(event) {
  if (event.currentTarget.value.trim().length === 0) {
    nameOutput.textContent = 'Anonymus';
    return;
  }
  nameOutput.textContent = event.currentTarget.value.trim();
}
