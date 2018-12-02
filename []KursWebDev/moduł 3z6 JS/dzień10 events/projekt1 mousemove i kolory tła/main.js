const okno = document.getElementById('okno');
// const body = document.getElementById('body');
// const ekran = document.getElementById('ekran');
const docBody = document.body;


docBody.addEventListener('mousemove', function (e) {
  okno.textContent = `browser window coordinate: ${e.clientX} ${e.clientY}`;
  // console.log(coordinate);
  // body.textContent = `document.body coordinate: ${e.pageX} ${e.pageY}`;
  // ekran.textContent = `(not)whole screen coorginate: ${e.screenX} ${e.screenY}`;
  const wW = window.innerWidth;
  const wH = window.innerHeight;


  // color tła zmienia się od białego do czarnego czyli od 255 do 0
  const wchiteBlack = ((wH - e.clientY) / wH) * 255;
  const blackWchite = (e.clientY / wH) * 255;
  docBody.style.backgroundColor = `rgb( ${wchiteBlack}, ${wchiteBlack},${wchiteBlack})`;
  docBody.style.color = `rgb( ${blackWchite}, ${blackWchite},${blackWchite})`;


  // poniżej kolor strony zmienia się od ciemniejszego u góry i lewej do jasniejszego -> dół prawo

  // const red = (e.clientX / wW) * 255;
  // const green = (e.clientY / wH) * 255;
  // const blue = ((e.clientY / wH) + (e.clientX / wW)) * 255 / 2;
  // docBody.style.backgroundColor = `rgb( ${red}, ${green},${blue})`;
  // console.log(wW - e.clientX, e.clientX);
})