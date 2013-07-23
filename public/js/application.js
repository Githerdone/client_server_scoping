$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('#awesomeness_holder').text($(this).data('heading'));
  });
});
