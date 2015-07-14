//Selectize
$('.my-select').selectize();


//menu

$(document).on('mouseenter mouseleave', 'li', function (e) {
    var $child = $(this).find('.nav');
    var $cornerleft = $(this).find(".line-left");
    var $cornerright = $(this).find(".line-right");
    if (e.type == 'mouseenter') {
        $child.css('display', 'block');
        $cornerleft.css('display', 'block');
        $cornerright.css('display', 'block');
    } else {
      
        $child.one($.support.transition.end, function () {
            $(this).css('display', 'none');
        });

        $cornerleft.css('display', 'none');

        $cornerright.css('display', 'none');

    }
    $(this)[(e.type == 'mouseenter' ? 'add' : 'remove') + 'Class']('hover');
});




    
// Scroll up
$(document).ready(function(){
 
  $(window).scroll(function(){
    if ($(this).scrollTop() >= 100) {
        $('.up').fadeIn();
    } else {
        $('.up').fadeOut();
    }
});
 
   $('.up').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
 
});

// google maps initialize
// $('.bs-example-modal-lg').on('shown.bs.modal', initialize);

if ($('div').hasClass('in-contacts')) {
      initialize()
} else {
      $('.bs-example-modal-lg').on('shown.bs.modal', initialize);
}
 
 

