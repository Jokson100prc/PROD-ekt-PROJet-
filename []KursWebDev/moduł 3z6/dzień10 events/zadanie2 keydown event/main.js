let red = 100;
let green = 100;
let blue = 100;
let opacity = 50;
document.body.style.backgroundColor = `rgba(${red},${green},${blue},${opacity}%)`;


// document.body.addEventListener('keydown', (e) => {
//   if (e.keyCode == 37 && red < 255) {
//     red += 3;
//   } else if (e.keyCode == 65 && red > 0) {
//     red -= 2
//   }
//   if (e.keyCode == 38 && green < 255) {
//     green += 3
//   } else if (e.keyCode == 87 && green > 0) {
//     green -= 2
//   }
//   if (e.keyCode == 39 && blue < 255) {
//     blue += 3
//   } else if (e.keyCode == 68 && blue > 0) {
//     blue -= 2
//   }
//   if (e.keyCode == 40 && opacity < 100) {
//     opacity += 3
//   } else if (e.keyCode == 83 && opacity > 0) {
//     opacity -= 2
//   }

//   document.body.style.backgroundColor = `rgba(${red},${green},${blue},${opacity}%)`;
// })







document.body.addEventListener('keydown', (e) => {

  switch (e.keyCode) {
    case 37:
      red < 255 ? red += 3 : red;
      break;
    case 38:
      green < 255 ? green += 3 : green;
      break;
    case 39:
      blue < 255 ? blue += 3 : blue;
      break;
    case 40:
      opacity < 100 ? opacity += 3 : opacity;
      break;
    case 65:
      red > 0 ? red -= 3 : red;
      break;
    case 87:
      green > 0 ? green -= 3 : green;
      break;
    case 68:
      blue > 0 ? blue -= 3 : blue;
      break;
    case 83:
      opacity > 0 ? opacity -= 3 : opacity;
      break;

    default:
  }
  document.body.style.backgroundColor = `rgba(${red},${green},${blue},${opacity}%)`;
  console.log(red, green, blue, opacity);
});