/*                          // first variant -- //
function fitVideoSize() {
    var $allVideo = $("video");
    for(var i=0; i>$allVideo.length; i++)
        var $videoHeight = $allVideo[i].videoHeight,
            $videoWidth = $allVideo[i].videoWidht;

        if ( window.innerWidth > $videoWidth ) {
            $allVideo[i].css("width",window.innerWidth)
            $allVideo[i].css("height","auto")
        } else if ( window.innerHeight > $videoHeight ) {
            $allVideo[i].css("width","auto")
            $allVideo[i].css("height",window.innerHeight)
        } else { //perfect variant
            $allVideo[i].css("width",window.innerWidth)
            $allVideo[i].css("height",window.innerHeight)
        }
}
*/
                            // second variant -- //
/*
$(window).on('resize', function() {
    console.log("resize")
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
});
*/

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