// carousel
$('.carousel').carousel({
  interval: 0
});

// sound-on-off
$(".icon-sound-on").on("click",function() {
    $(this).toggleClass("sound-off")
});