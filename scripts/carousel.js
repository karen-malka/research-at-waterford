setInterval(function() {
    plusSlides(1);
  }, 5000);


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = $(".slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    $(slides[i]).addClass("hidden");
  }
  $(slides[slideIndex-1]).removeClass("hidden");
}
