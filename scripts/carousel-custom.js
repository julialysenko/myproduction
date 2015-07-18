// carousel
$('.carousel').carousel({
  interval: 0
});

// sound-on-off
$(".icon-sound-on").on("click",function() {
    $(this).toggleClass("sound-off")
});

//video play
$(document).on('slide.bs.carousel', function() {
    if ($('.item').hasClass('active')) {
        var activeVideo = $('.active video');
        activeVideo[0].pause();
    }
});

$(document).on('slid.bs.carousel', function() {
    if ($('.item').hasClass('active')) {
        var activeVideo = $('.active video');
        activeVideo[0].play();
    }
});

//audio play on-off
var video = $('.item video')