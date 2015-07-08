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


$(document).ready(function() {
      $('.myMenu > li').bind('mouseover', showLine);
      $('.myMenu > li').bind('mouseout', showLine);
      
      function showLine() {
         $( "span" ).removeClass( "corner-left" ).addClass( "line-left" ); 
      };
      
      function hideLine() {
         $( "span" ).removeClass( "line-left" ).addClass( "corner-left" ); 
      };
               
   });

$(document).ready(function() {
      $('.myMenu > li').bind('mouseover', showLine);
      $('.myMenu > li').bind('mouseout', showLine);
      
      function showLine() {
         $( "span" ).removeClass( "corner-rigth" ).addClass( "line-rigth" ); 
      };
      
      function hideLine() {
         $( "span" ).removeClass( "line-rigth" ).addClass( "corner-rigth" ); 
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

// ----modal----
//   $('#map-canvas').on('shown', function () {
//   google.maps.event.trigger(map, 'resize');
//   map.setCenter(theatre);
//   });

 

