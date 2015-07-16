//Selectize
$('.my-select').selectize();


//menu

$(document).on('mouseenter mouseleave', 'li', function (e) {
    var $child = $(this).find('> .nav');
    if ($child.length === 0) return true;
    var $cornerleft = $(this).find(".line-left");
    var $cornerright = $(this).find(".line-right");
    if (e.type == 'mouseenter') {
        $child.css('display', 'block');
        $cornerleft.css('display', 'block');
        $cornerright.css('display', 'block');
        $child[0].offsetWidth;
    } else {

        $child.one($.support.transition.end, function () {
            $(this).css('display', 'none');
        });

        $cornerleft.one($.support.transition.end, function () {
            $(this).css('display', 'none');
        });

        $cornerright.one($.support.transition.end, function () {
            $(this).css('display', 'none');
        });

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
} else if ($('div').hasClass('bs-example-modal-lg')) {
      $('.bs-example-modal-lg').on('shown.bs.modal', initialize);
}
