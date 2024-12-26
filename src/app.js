import getRandomColor from "./utils";

export default function initApp() {
  const buttonChangeColor = document.createElement('button');
  buttonChangeColor.className = 'button';
  buttonChangeColor.textContent = 'Изменить цвет страницы';

  document.body.append(buttonChangeColor);

  buttonChangeColor.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  });
}
