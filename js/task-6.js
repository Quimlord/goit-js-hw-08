const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('#controls input');
const boxContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', handlerCreate);
destroyBtn.addEventListener('click', handlerDestroy);

function handlerDestroy() {
  destroyBoxes();
}

function handlerCreate() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return alert('Wrong value, the value must be less than 100');
  }
  destroyBoxes();
  createBoxes(amount);
}

function createBoxes(amount) {
  const divArray = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = 30 + 10 * i + 'px';
    div.style.height = 30 + 10 * i + 'px';
    div.style.backgroundColor = getRandomHexColor();
    divArray.push(div);
  }
  boxContainer.append(...divArray);
}

function destroyBoxes() {
  boxContainer.innerHTML = '';
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
