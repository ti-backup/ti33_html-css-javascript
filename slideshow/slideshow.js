var slideIndex = 1;

$(document).ready(function(){
  showSlides(slideIndex);

  $(".prev").click(function(){
    showSlides(--slideIndex);
  });

  $(".next").click(function(){
    showSlides(++slideIndex);
  });

  $(".dot").click(function(){
    slideIndex = $(this).attr("value");
    showSlides(slideIndex);
  });
});

function showSlides(n) {
  var contador = $(".mySlides").length;

  if (n > contador) slideIndex = 1;
  if (n < 1) slideIndex = contador;

  $(".mySlides").each(function(i){
    if (i == slideIndex - 1) $(this).show();
    else $(this).hide();
  });

  $(".dot").each(function(i){
    if (i == slideIndex - 1) $(this).addClass("active");
    else $(this).removeClass("active");
  });
}

function showSlides_old(n) {
  var i;
  var slides = $(".mySlides");
  var dots = $(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      $(slides[i]).hide();
  }
  for (i = 0; i < dots.length; i++) {
      $(dots[i]).removeClass("active");
  }
  $(slides[slideIndex-1]).show();
  $(dots[slideIndex-1]).addClass("active");
}