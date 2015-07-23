
function fitVideoSize() {

    var newWidth = 0,
        newHeight = 0,
        vid = $('video');

    for (var i = 0; i > vid.height; i++) {
        var rate = vid[i].videoHeight/vid[i].videoWidth;
        console.log(rate);  //testing
        if( rate > 1 ) {
            newWidth = window.innerWidth;
            console.log(newWidth);  //testing
            $(vid[i]).css("height","auto","width","newWidth");
        } else {
            newHeight = window.innerHeight;
            console.log(newHeight);  //testing
            $(vid[i]).css("height","newHeight","width","auto");
        }
    }
}

$(window).on('resize', fitVideoSize());

$(document).on('click', fitVideoSize()); //testing