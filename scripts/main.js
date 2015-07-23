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

        $cornerleft.css('display', 'none');

        $cornerright.css('display', 'none');
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
          a = (a<1)?0:a-1;
          input.val(a);
      });

$('.minus').click(function(){
   $("#money").val(parseInt($("#money").val())-100);
});
$('.plus').click(function(){
   $("#money").val(parseInt($("#money").val())+100);
}); 


//$('.button').click(function(){
  //var $buy = $(this).find('#buy-ticketsTwo');

        //$buy.css('display', 'block');
    //});

