$(document).ready(function(){
  $(".clickabledsg").click(function () {
    $(".design-showing").toggle();
    $(".design-hidden").toggle();
  });
  $(".clickabledvp").click(function () {
    $(".development-showing").toggle();
    $(".development-hidden").toggle();
  });
  $(".clickableprd").click(function () {
    $(".product-showing").toggle();
    $(".product-hidden").toggle();
  });
});