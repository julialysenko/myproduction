
// MADAL FIX --- add paddint to element with position:fixed
var $targetClass = '.header',
    myObj = {$body:$(document.body)},
    scrollWidth = $.fn.modal.Constructor.prototype.measureScrollbar.call(myObj);


$(document).on('show.bs.modal', function(){
    $($targetClass).css("padding-right",scrollWidth);

$(document).on('hidden.bs.modal', function (){
    $($targetClass).css("padding-right","0");
});
