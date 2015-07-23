
/*
function fitVideoSize() {
        var rate = $(".active video").videoHeight / $(".active video").videoWidth;

        if( rate > 1 ) {
            $(".active video").css("height","auto")
            $(".active video").css("width",window.innerWidth)
        } else {
            $(".active video").css("height",window.innerHeight)
            $(".active video").css("width","auto")

        }
}

$(window).on('resize', fitVideoSize());
*/

$(window).on('resize', function() {
    $(".active video").css("height",window.innerHeight)
    $(".active video").css("width","auto")
});

//testing