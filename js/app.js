$(document).ready(function(){
    ryu();
    hulkRyu();
});

 function ryu() {
  $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function(){
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1150px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '650px');
            });
       
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

      $(document).keydown(function(e) {
        if (e.keyCode == 88) {
          $('.ryu-ready').hide();
          $('.ryu-still').hide();
          $('.ryu-cool').show();
        }   
      }).keyup(function(e) {
        if (e.keyCode == 88) {
          $('.ryu-cool').hide();
          $('.ryu-still').show();
        }
      });
}

 function hulkRyu() {
  $('.hulk-ryu').mouseenter(function(){
        $('.hulk-ryu-still').hide();
        $('.hulk-ryu-ready').show();
    })
    .mouseleave(function(){
        $('.hulk-ryu-still').show();
        $('.hulk-ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.hulk-ryu-ready').hide();
        $('.hulk-ryu-throwing').show();
        $('.hulk-hadouken').finish().show().animate(
            {'right': '1150px'},
            500,
            function(){
                $(this).hide();
                $(this).css('right', '650px');
            });
    })
    .mouseup(function(){
        $('.hulk-ryu-throwing').hide();
        $('.hulk-ryu-ready').show();
    });

     $(document).keydown(function(e) {
        if (e.keyCode == 88) {
          $('.hulk-ryu-ready').hide();
          $('.hulk-ryu-still').hide();
          $('.hulk-ryu-cool').show();
        }   
      }).keyup(function(e) {
        if (e.keyCode == 88) {
          $('.hulk-ryu-cool').hide();
          $('.hulk-ryu-still').show();
        }
      });
 }

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.1;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}