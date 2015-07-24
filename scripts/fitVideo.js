function fitVideoBackground() {
    var $allVideo = $("video");
    $allVideo.each(function() {
        if ( window.innerWidth > $(this).videoWidth ) {
            $(this).css("width",window.innerWidth)
            $(this).css("height","auto")
        } else if ( window.innerHeight > $(this).videoHeight ) {
            $(this).css("width","auto")
            $(this).css("height",window.innerHeight)
        } else { //perfect variant
            $(this).css("width",window.innerWidth)
            $(this).css("height",window.innerHeight)
        }
    })
}

$(document).on('canplay',fitVideoBackground());
$(window).on('resize', fitVideoBackground());