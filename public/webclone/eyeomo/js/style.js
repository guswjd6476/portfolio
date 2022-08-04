$(document).ready(function () {
    $( '.main_bg' ).animate( {
       right : 0
      },1000 );
      $( '.text_wrap' ).animate( {
        left : 0
       },1000 );
       $( '.sec2 .pinkcircle' ).animate( {
        top : -100
       },1000 ); 
});

$(document).ready(function(){
    var winHalfHeight = $(window).outerHeight()/2;
    var calcTemp = ($('.sec2 .link_list').offset().top) - (winHalfHeight) -400;
    if ($(window).scrollTop() > calcTemp) {
        setTimeout(function(){$('.sec2 .link_list li:nth-child(1)').fadeIn()},0);
        setTimeout(function(){$('.sec2 .link_list li:nth-child(2)').fadeIn()},400);
        setTimeout(function(){$('.sec2 .link_list li:nth-child(3)').fadeIn()},800);
        setTimeout(function(){$('.sec2 .link_list li:nth-child(4)').fadeIn()},1200);
    } 
    $(window).scroll(function(){
        if ($(window).scrollTop() > calcTemp) {
            setTimeout(function(){$('.sec2 .link_list li:nth-child(1)').fadeIn()},0);
            setTimeout(function(){$('.sec2 .link_list li:nth-child(2)').fadeIn()},400);
            setTimeout(function(){$('.sec2 .link_list li:nth-child(3)').fadeIn()},800);
            setTimeout(function(){$('.sec2 .link_list li:nth-child(4)').fadeIn()},1200);
    }
});
});
