document.addEventListener("DOMContentLoaded", page_init);
function page_init (){
    showSlides(slideIndex);
}
var slideIndex = 2;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("slider-boton");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slider-activate", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slider-activate";
}
