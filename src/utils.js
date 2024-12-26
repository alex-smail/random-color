export default function getRandomColor() {
  //   const color = ['darkblue', 'red', 'yellow', 'darkgoldenrod', 'green', 'pink'];
  //   const randomIndex = Math.floor(Math.random() * color.length);
  //   return color[randomIndex]
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
