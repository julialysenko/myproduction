// carousel
$('.carousel').carousel({
  interval: 0
});

// sound-on-off
var $allVideo = $('video');
$(".icon-sound-on").on("click",function() {
    $(this).toggleClass("sound-off");
    if ($(".icon-sound-on").hasClass('sound-off')) {
        for(var i=0; i<$allVideo.length; i++)
            $allVideo[i].volume = 0;
    } else {
        for(var i=0; i<$allVideo.length; i++)
            $allVideo[i].volume = 1;
    }
});

//video play

$(document).on('slide.bs.carousel', function() {
    if ($('.item').hasClass('active')) {
        var videoPause = $('.active video');
        videoPause[0].pause();
    }
});

$(document).on('slid.bs.carousel', function() {
    if ($('.item').hasClass('active')) {
        var videoPlay = $('.active video');
        videoPlay[0].play();
    }
});