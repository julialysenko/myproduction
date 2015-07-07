//Selectize
$('.my-select').selectize();


//Menu
$(document).ready(function() {
      $('.myMenu > li').bind('mouseover', openSubMenu);
      $('.myMenu > li').bind('mouseout', closeSubMenu);
      
      function openSubMenu() {
         $(this).find('li').css('display', 'block');   
      };
      
      function closeSubMenu() {
         $(this).find('li').css('display', 'none'); 
      };
               
   });


// Scroll up
$(document).ready(function(){
 
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
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
