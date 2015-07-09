//Selectize
$('.my-select').selectize();


<<<<<<< HEAD
//Menu alternative
=======
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


$(document).ready(function() {
      $('a.menu-nav').bind('mouseover', showLine);
      $('a.menu-nav').bind('mouseout', hideLine);
      
      function showLine() {
         $( "span.corner-left" ).removeClass( "corner-left" ).addClass( "line-left" ); 
      };
      
      function hideLine() {
         $( "span.line-left" ).removeClass( "line-left" ).addClass( "corner-left" ); 
      };
               
   });

$(document).ready(function() {
      $('a.menu-lang').bind('mouseover', showLine);
      $('a.menu-lang').bind('mouseout', hideLine);
      
      function showLine() {
         $( "span.corner-right" ).removeClass( "corner-right" ).addClass( "line-right" ); 
      };
      
      function hideLine() {
         $( "span.line-right" ).removeClass( "line-right" ).addClass( "corner-right" ); 
      };
               
   });

>>>>>>> b67c56f569631b533f0ad83be09b886373a8272d

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

// ----modal----
//   $('#map-canvas').on('shown', function () {
//   google.maps.event.trigger(map, 'resize');
//   map.setCenter(theatre);
//   });

 

