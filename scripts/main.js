//Selectize
$('.my-select').selectize();

//menu
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


// Scroll up
$(document).ready(function(){

  $(window).scroll(function(){
    if ($(this).scrollTop() >= 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

   $('.scrollup').click(function(){
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
