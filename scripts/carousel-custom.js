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
        $('.active video').load();
        /*  $('.active video').prop('paused','false');    -- не пашет*/
        /*  $('.active video').play();                    -- не узнает функцию*/
        /*console.log('работаю');                       --  проверка связи*/
    }
});

