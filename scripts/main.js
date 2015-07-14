//Selectize
$('.my-select').selectize();


//menu
<<<<<<< HEAD
 $('.myMenu > li').on('mouseover', openSubMenu);
 $('.myMenu > li').on('mouseout', closeSubMenu);

 function openSubMenu() {
    $(this).find('li').css('display', 'block');
    $(this).find(".line-left").css('opacity','1');
    $(this).find(".line-right").css('opacity','1');
 };

 function closeSubMenu() {
    $(this).find('li').css('display', 'none');
    $(this).find(".line-left").css('opacity','0');
    $(this).find(".line-right").css('opacity','0');
 };
=======

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



>>>>>>> b67da3b0a08f2f49cf83ccddc6f4065f57e5de4a


// Scroll up
$(document).ready(function(){

  $(window).scroll(function(){
    if ($(this).scrollTop() >= 100) {
        $('.up').fadeIn();
    } else {
        $('.up').fadeOut();
    }
});
<<<<<<< HEAD

   $('.scrollup').click(function(){
=======
 
   $('.up').click(function(){
>>>>>>> b67da3b0a08f2f49cf83ccddc6f4065f57e5de4a
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
