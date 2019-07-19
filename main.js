var randombtn = $("#randombtn");

randombtn.on("click", randomArticle);

function randomArticle() {
  var articles = ["tradewar.html", "brexit.html", "nkorea.html", "syria.html", "mexico.html", "sudan.html"];
  var randomDec = Math.random();
  var randomNum = randomDec * 6;
  var index = Math.floor(randomNum);
  console.log(index);
  location.replace(articles[index]);
}

//  DARK MODE
var dark =  $(".dark");
dark.on("click", switchMode);
var count = 0;

function switchMode(){
  count++;
  $('.homeLight').toggleClass("homeDark");
  $('.nav').toggleClass("navDark");
  $('.dark').toggleClass("darkDark");

  if (count % 2 == 1) {
    $('.navbar').css('color', 'white');
    $('p').css('color', 'white');
    $('body').css('background-color', '#060E1F');
  } else {
    $('.navbar').css('color', 'black');
    $('p').css('color', 'black');
    $('body').css('background-color', 'white');
  }

}

// SLIDESHOW
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 sconds
}
