const body = document.querySelector('body');
const color = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', handlerClick);

function handlerClick(event) {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
