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
        /*  $('.active video').prop('paused','false');    -- не пашет*/
         activeVideo[0].play();
        /*console.log('работаю');                       --  проверка связи*/
    }
});

