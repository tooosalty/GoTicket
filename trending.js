var $j = jQuery.noConflict();
//scroll to
$j("#sresMenu button").click(function () {
  var currentMenu = $j(this).attr("data-menuBtn");
  $j("html, body").animate(
    { scrollTop: $j("#" + currentMenu).offset().top },
    1000
  );
});
$j(".sresCalDay").click(function () {
  var currentDay = $j(this).attr("data-calDay");
  $j("html, body").animate(
    { scrollTop: $j("#sres" + currentDay).offset().top },
    1000
  );
});
//light box
$j(".sresBestSeat").click(function () {
  $j(".sresLightBox").fadeIn(1000);
});
$j(".sresCloseBtn, .sresLightBox").click(function () {
  $j(".sresLightBox").fadeOut(500);
});
//sticky menu
$j(document).scroll(function () {
  var pageTop = $j(document).scrollTop();
  var scollTarget = $j("#sresHeader").offset().top;
  if (pageTop > scollTarget) {
    $j("#sresMenu").addClass("sresMenuToggle");
  } else {
    $j("#sresMenu").removeClass("sresMenuToggle");
  }
});
