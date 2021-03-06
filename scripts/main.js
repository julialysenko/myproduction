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

/*
$('.person').click(function(){
    var $c = $('.corner-actor');

        $c.css('display', 'block');
     });
*/

// events video

$(document).on('mouseenter','.events .row', function(){
  $(this).addClass("inversion");

  var $i = $('.inversion').parent().attr('data-event-index');
  $("[data-video="+ $i +"]").parent().addClass("video-show");

  var $activeVideo = $(".video-show video");
  $activeVideo[0].play();
});

$(document).on('mouseleave','.events .row', function(){
  var $i = $('.inversion').parent().attr('data-event-index');
  $("[data-video="+ $i +"]").parent().removeClass("video-show");

  var $activeVideo = $(".video-show video");
  // $activeVideo[0].pause();

  $(this).removeClass("inversion");
});


// counter

$('.button-counter').on("click", function () {
  var $sum = $('#inp'),
      Value = $sum.val();
    if ($(this).hasClass("plus")) {
        Value = parseFloat(Value) + 1
    } else {
      if (Value > 1) {
        Value = parseFloat(Value) - 1
      }
    }

    $sum.val(Value);
    $sum.change();
});

  $('#inp').on("change input", function () {
  var main_price = Number($('#money').data('price'));
  var input_quantity = Number($('#inp').val());
  main_price *= input_quantity;
  $('#money').text(main_price) });


//Blocks tikets

$(document).on('click', '.continue', function fadeIn() {
  document.getElementById('buy-ticketsTwo').style.display = 'block';
setTimeout(function() {document.getElementById('buy-ticketsTwo').style.opacity='1'},50)});


$(document).on('click', '.buy', function fadeIn() {
  document.getElementById('buy-ticketsThree').style.display = 'block';
setTimeout(function() {document.getElementById('buy-ticketsThree').style.opacity='1'},50)});


/*
$('.continue').click(function(){
    var $buy = $('.buy-ticketsTwo');

        $buy.css('display', 'block');
     });

$('.buy').click(function(){
    var $buy = $('.buy-ticketsThree');

        $buy.css('display', 'block');
     });



$(document).on('click', '.continue', function (e) {
    var $child = $(this).find('.buy-ticketsTwo');

        if ( $child.css('display') == 'block' && $child.css('opacity') == 1) {
          $child.one($.support.transition.end, function () {
            $(this).css('display', 'none');
          });
    }

    $(this)[(e.type == 'click' ? 'add' : 'remove') + 'Class']('active');
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

$.fn.collapse.Constructor.TRANSITION_DURATION = 3000;

