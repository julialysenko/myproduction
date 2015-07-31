//Selectize
$('.my-select').selectize();


//menu

$(document).on('mouseenter mouseleave', 'li', function (e) {
    var $child = $(this).find('> .nav'),
        $cornerleft = $(this).find(".corner-left"),
        $cornerright = $(this).find(".corner-right"),
        $lineleft = $(this).find(".line-left"),
        $lineright = $(this).find(".line-right");

    if ($child.length === 0) return true;

    if (e.type == 'mouseenter') {
        $child.css('display', 'block');
        $cornerleft.css('display', 'none');
        $cornerright.css('display', 'none');
        $lineleft.css('display', 'block');
        $lineright.css('display', 'block');
        $child[0].offsetWidth;
    } else if (e.type == 'mouseleave') {
        if ( $child.css('display') == 'block' && $child.css('opacity') == 1) {
          $child.one($.support.transition.end, function () {
            $(this).css('display', 'none');
          });
          }
        $cornerleft.css('display', 'block');
        $cornerright.css('display', 'block');
        $lineleft.css('display', 'none');
        $lineright.css('display', 'none');
    }
    $(this)[(e.type == 'mouseenter' ? 'add' : 'remove') + 'Class']('hover');
});


// Scroll up
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


// google maps initialize
// $('.bs-example-modal-lg').on('shown.bs.modal', initialize);

if ($('div').hasClass('in-contacts')) {
      initialize()
} else if ($('div').hasClass('bs-example-modal-lg')) {
      $('.bs-example-modal-lg').on('shown.bs.modal', initialize);
}

// textarea
window.autosize && autosize(document.querySelectorAll('textarea'));


// counter
var input = $('#inp');

 var a;

      $('.plus').click(function(){
          a = input.val();
          a++;
          input.val(a);
      });

      $('.minus').click(function(){
          a = input.val();
          a = (a<2)?1:a-1;
          input.val(a);
      });


 $('.minus').click(function(){
    if (a>1) {
        $("#money").val(parseInt($("#money").val())-100);
    } else {
        false;
    }
});

$('.plus').click(function(){
   $("#money").val(parseInt($("#money").val())+100);
});

//Blocks tikets

/*$('.continue').click(function(){
    var $buy = $('#buy-ticketsTwo');

        $buy.css('display', 'block');
     });

$('.buy').click(function(){
    var $buy = $('#buy-ticketsThree');

        $buy.css('display', 'block');
     });

*/

//Acordeon

$(document).on('click', '.close', function(){
   $(this).closest('.collapse').collapse('hide');
});


$(document).on('show.bs.collapse', '.collapse', function(){
   var group = $(this).data('group');
   var $els = $('[data-group="'+ group + '"]');
   $els = $els.not(this);
   $els.collapse('hide');
});

/*
$.fn.collapse.Constructor.TRANSITION_DURATION = 3000;
*/


//scrollDown in presentation
var $pixelDown = 120;
$(document).on("click",".scroll-down", function() {
  $pixelDown = $pixelDown + 600;
  $("html, body").animate({ scrollTop: $pixelDown }, 600);

});

$(document).on("click",".scroll-up", function() {
  if ($pixelDown <= 120) {return true}
  $pixelDown = $pixelDown - 600;
  $("html, body").animate({ scrollTop: $pixelDown }, 600);

});



$(document).on('click', '.continue', function (e) {
    var $block = $(this).find('#buy-ticketsTwo');

    if (e.type == 'click') {
        $block.css('display', 'block');

    } else if (e.type == 'click') {
        if ( $block.css('display') == 'block' && $block.css('opacity') == 1) {
          $block.one($.support.transition.end, function () {
            $(this).css('display', 'none');
          });
          }
    }
    $(this)[(e.type == 'click' ? 'add' : 'remove') + 'Class']('active');
});




/*
$(document).on('mouseenter mouseleave', '.person', function (e) {

    var  $corneractor = $(this).find(".corner-actor"),

    if (e.type == 'mouseenter') {

        $corneractor.css('display', 'block');

    } else if (e.type == 'mouseleave') {

            $(this).css('display', 'none');
          }
});



$('.person').click(function(){
    var $c = $('.corner-actor');

        $c.css('display', 'block');
     });
*/

// events video

$(document).on('mouseenter','.events', function(){
   $(".events .row").addClass("inversion");
});

$(document).on('mouseleave','.events', function(){
   $(".events .row").removeClass("inversion");
});