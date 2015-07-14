// carousel
$('.carousel').carousel({
  interval: 10000
});

// sound-on-off
$(".icon-sound-on").on("click",function() {
    $(this).toggleClass("sound-off")
});