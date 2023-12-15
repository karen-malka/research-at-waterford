$("#b1").click(function() {
    $("#b2").removeClass("current-button");
    $("#b3").removeClass("current-button");
    $("#b4").removeClass("current-button");
    $("#b5").removeClass("current-button");
    $("#b1").addClass("current-button");
    $("#quote2").addClass("hidden");
    $("#quote3").addClass("hidden");
    $("#quote4").addClass("hidden");
    $("#quote5").addClass("hidden");
    $("#quote1").removeClass("hidden");
    currSlide(1);
});

$("#b2").click(function() {
    $("#b1").removeClass("current-button");
    $("#b3").removeClass("current-button");
    $("#b4").removeClass("current-button");
    $("#b5").removeClass("current-button");
    $("#b2").addClass("current-button");
    $("#quote1").addClass("hidden");
    $("#quote3").addClass("hidden");
    $("#quote4").addClass("hidden");
    $("#quote5").addClass("hidden");
    $("#quote2").removeClass("hidden");
    currSlide(2);
});

$("#b3").click(function() {
    $("#b1").removeClass("current-button");
    $("#b2").removeClass("current-button");
    $("#b4").removeClass("current-button");
    $("#b5").removeClass("current-button");
    $("#b3").addClass("current-button");
    $("#quote1").addClass("hidden");
    $("#quote2").addClass("hidden");
    $("#quote4").addClass("hidden");
    $("#quote5").addClass("hidden");
    $("#quote3").removeClass("hidden");
    currSlide(3);
});

$("#b4").click(function() {
    $("#b1").removeClass("current-button");
    $("#b2").removeClass("current-button");
    $("#b3").removeClass("current-button");
    $("#b5").removeClass("current-button");
    $("#b4").addClass("current-button");
    $("#quote1").addClass("hidden");
    $("#quote2").addClass("hidden");
    $("#quote3").addClass("hidden");
    $("#quote5").addClass("hidden");
    $("#quote4").removeClass("hidden");
    currSlide(4);
});

$("#b5").click(function() {
    $("#b1").removeClass("current-button");
    $("#b2").removeClass("current-button");
    $("#b3").removeClass("current-button");
    $("#b4").removeClass("current-button");
    $("#b5").addClass("current-button");
    $("#quote1").addClass("hidden");
    $("#quote2").addClass("hidden");
    $("#quote3").addClass("hidden");
    $("#quote4").addClass("hidden");
    $("#quote5").removeClass("hidden");
    currSlide(5);
});

let index = 1;
showSlide(index);

function plusSlide(n) {
  showSlide(index += n);
}

function currSlide(n) {
    showSlide(index = n);
}

function showSlide(n) {
  let i;
  let slides = $(".slidequote");
  let buttons = $(".round-button");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    $(slides[i]).addClass("hidden");
    $(buttons[i]).removeClass("current-button");
  }
  if(index-1 == 1) {
    $("#recipe").removeClass("hidden");
  }
  else {
    $("#recipe").addClass("hidden");
  }
  $(slides[index-1]).removeClass("hidden");
  $(buttons[index-1]).addClass("current-button");
}
