$("#testimonials-arrow").click(function() {
    $("#quote-bar").removeClass("hidden");
    $("#testimonials-arrow").addClass("hidden");
    $("#testimonials-close").removeClass("hidden");
});

$("#testimonials-close").click(function() {
    $("#quote-bar").addClass("hidden");
    $("#testimonials-close").addClass("hidden");
    $("#testimonials-arrow").removeClass("hidden");
});
