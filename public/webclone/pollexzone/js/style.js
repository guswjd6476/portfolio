$(document).ready(function () {
    $( 'header' ).animate( {
       top : 0
      },1000 );
    $('.mbtit_box').css('display', 'none');
    $('.mbtit_box').fadeIn(2000);     
    $('.sec1_top_textbox').addClass('go');
    $('.sec1_box > .btn_more').animate({
        bottom:0
    },1000)
    $('.sub_title').addClass('gogo');
    $('.sub_title_textbox').addClass('go');
});


$(document).ready(function(){
    var winHalfHeight = $(window).outerHeight()/2;
    var calcTemp = ($('.sec2_wrap').offset().top) - (winHalfHeight) -400;
    if ($(window).scrollTop() > calcTemp) {
        $('.sec2_left a').stop().animate({'width':'100%'},1000);
        $('.sec2_right .rimg1').stop().animate({'width':'100%'},1000);
        $('.sec2_right .rimg2').stop().animate({'height':'305px'},1000);
        $('.sec2_right .rimg3').stop().animate({'bottom':'0'},1000);
        $('.sec2_right .rimg4').stop().animate({'right':'0'},1000);
        
    } 
    $(window).scroll(function(){
        if ($(window).scrollTop() > calcTemp) {
            $('.sec2_left a').animate({'width':'100%'},1000);
            $('.sec2_right .rimg1').stop().animate({'width':'100%'},1000);
            $('.sec2_right .rimg2').stop().animate({'height':'305px'},1000);
            $('.sec2_right .rimg3').stop().animate({'bottom':'0'},1000);
            $('.sec2_right .rimg4').stop().animate({'right':'0'},1000);
        } 
    });
  
  
});

$(function(){
    var btn_m = $('.top_m');
    var allMenu = $('.allMenu');
    var body = $('#wrap');
    var mclose = $('.m_close');
    btn_m.on('click',function(){
        allMenu.fadeIn();
        body.addClass('fix')
    })
    mclose.on('click',function(){
        allMenu.fadeOut();
        body.removeClass('fix')
    })
})

$(document).ready(function(){
    mobile_menu();
  });
  function mobile_menu(){
      /* 변수 선언 */
      var $menu = null;
      var $left_gnb = null; // 영역 전체
      var $depth1_wrap = null;
      var $depth1 = null;
      var $depth1_btn = null;
      
      /* 시작 함수 */
      function start(){
          init();
          init_event();
      }
      /* 변수 초기화 함수 */
      function init(){
          $menu = $('.menu');
          $left_gnb = $('.left_gnbWrap'); // 영역 전체
          $depth1_wrap = $('.left_gnb li');
          $depth1 = $depth1_wrap.children('ul');
          $depth1_btn = $depth1_wrap.children('a');
      }
      /* 이벤트 함수 */
      function init_event(){
          
          /* 모바일 메뉴 버튼 클릭했을때 모바일 메뉴영역 나오게 하기 */
          $menu.click(function(event){
              event.preventDefault();
              $left_gnb.addClass('on');
          });
          
          /* x버튼 눌렀을때 모바일 메뉴 닫기 */
          $('.mclose').click(function(event){
              event.preventDefault();
  
              $left_gnb.removeClass('on');
              
              // x버튼 누르면 시간차 약간두고 소메뉴 닫히게 하기
              setTimeout(function(){
                  $depth1_btn.removeClass('on');
                  $depth1.slideUp();
              },300)
          });
          
          /* depth1의 각메뉴 클릭시 depth2 나오게 하기 */
          $depth1_btn.click(function(event){
              event.preventDefault();
              var $this = $(this);
              var $this_ul = $this.siblings('ul');
  
              var check = $this.hasClass('on');
              if(check){
                  $this.removeClass('on');
                  $this_ul.stop(true,true).slideUp();
              }else{
                  $depth1_btn.removeClass('on');
                  $depth1.stop().slideUp();
                  $this.addClass('on');
                  $this_ul.stop(true,true).slideDown();
              }
          });
          
          /* 디바이스 크기 변경시 모바일 메뉴영역 숨기기 */
          $(window).resize(function(){
              $left_gnb.removeClass('on');
          });
      }
      
      start(); // 시작 호출
  }