$(function() {
    var $nav = $('.mnav'),
      $btnnav = $('.btn_nav')
      $mask = $('.mask')
    $btnnav.click( function() {
        $nav.slideToggle()
        $mask.toggle();
        $btnnav.toggleClass( 'on' )
    })
});

$(".st").hide();
$(".story_con").each(function () {
  $(this).children(".story_wrap li:first").addClass("active"); //Activate first tab
  $(this).children(".st:first").first().show();
});
$(".story_wrap li a").click(function () {
  $(this).parent().siblings("li").removeClass("active");
  $(this).parent().addClass("active"); 
  $(this).parent().parent().parent().parent().find(".st").hide();
  var activeTab = $(this).attr("rel");
   $("#" + activeTab).fadeIn();
});

$(".lank_wrap").hide();
$(".lank_con").each(function () {
  $(this).children(".tab_wrap li:first").addClass("active"); //Activate first tab
  $(this).children(".lank_wrap:first").first().show();
});
$(".tab_wrap li a").click(function () {
  $(this).parent().siblings("li").removeClass("active");
  $(this).parent().addClass("active"); 
  $(this).parent().parent().parent().parent().find(".lank_wrap").hide();
  var activeTab = $(this).attr("rel");
   $("#" + activeTab).fadeIn();
});

