$('.interface').on('click', function () {
    if ($(this).hasClass('orange')) {
        $('body').css('background-color', 'orange');
    }
    if ($(this).hasClass('green')) {
        $('body').css('background-color', 'green');
    }
})

















/*

var $oran = $('.orange');
var $gree = $('.green');
var $incr = $('.increase');
var $move = $('.move');


$($oran).on('click', function () {
    // console.log(this);
    $('body').css('background-color', 'orange');
})
$($gree).on('click', function () {
    // console.log(this);
    $('body').css('background-color', 'green');
})
$($incr).on('click', function () {
    // console.log(this);
    $('.text').css('font-size', '+=1');
})
$($move).on('click', function () {
    // console.log(this);
    // $('p').css('letter-spacing', '+=15px');
    // $('p').css('width', '+=15px');
    $('p').css('display', 'flex');
    $('p').css('flex-grow', '+=1');
    $('p').css('flex-grow', '+=1');
})

*/










/*$('.interface').on("click", function () {
 // console.log("działa!");
 // console.log(this);
 // console.log($(this))
 // console.log($(this).attr("class"))
 // console.log(this.className)

 if ($(this).hasClass("orange")) {
  console.log("prawda w pomarańczowy");
  $('body').attr("class", "orange")
  // $('body').toggleClass("orange");
  // $('body').css("background-color", "orange");
  // $('body').css({
  //  "background-color": "orange"
  // })
  // $('p').css({
  //  "font-size": "130px",
  // })
 }

 if ($(this).hasClass("green")) {
  console.log("prawda w zielony");
  $('body').attr("class", "green");

  // $('body').css({
  //  "background-color": "#0f0"
  // })


  // $('p').css({
  //  "font-size": "130px",
  // })
 }

 if ($(this).hasClass("increase")) {
  console.log("prawda w plus");
  $('.text').animate({
   "font-size": "+=2px"
  }, 500)
 }

 if ($(this).hasClass("move")) {
  console.log("prawda w strzałkę");
  $('.text').animate({
   "left": "+=15px",
   "letter-spacing": "+=2px"
  })
 }





 // if (this.classList.contains("green")) {
 //  console.log("prawda w zielony")
 // }
})*/