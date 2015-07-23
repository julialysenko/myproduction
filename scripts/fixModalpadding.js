var $targetClass = '.header';

$(document).on('show.bs.modal', function(){
    /*
    var scrollWidth = $.fn.modal.Constructor.prototype.measureScrollbar();
    $('.header').css("padding-right",scrollWidth);
    */
    $($targetClass).css("padding-right","16px");
});
$(document).on('hidden.bs.modal', function (){
    $($targetClass).css("padding-right","0");
});
