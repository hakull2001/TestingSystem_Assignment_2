$(document).ready(function() {
  $(".content li").hover(
    function() {
      $(this).find('ul').slideDown();
    },
    function() {
      $(this).find('ul').slideUp();
    });
});