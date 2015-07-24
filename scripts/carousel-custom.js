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


//video fadeIn/out

$(document).on("slid.bs.carousel", function() {
    var $i = $('.carousel-indicators .active').attr('data-slide-to');

    $("[data-video="+ $i +"]").parent().toggleClass("video-show");

    var $activeVideo = $(".video-show video");
    $activeVideo[0].play();

});

$(document).on("slide.bs.carousel", function() {
    var $i = $('.carousel-indicators .active').attr('data-slide-to');

    $("[data-video="+ $i +"]").parent().toggleClass("video-show");
    for(var j=0; j<$allVideo.length; j++)
            $allVideo[j].pause();
});

