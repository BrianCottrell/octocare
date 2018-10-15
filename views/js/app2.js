$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.escalate.btn').click(function(e) {

    $('.kaidan').addClass('red');
    $('.kaidan').removeClass('yellow');
    $('.sydney').addClass('red');
    $('.sydney').removeClass('grey');
    $('.sydney').show().delay(1000).queue(function(n) {
      $('.bs-example-modal-lg').modal('hide');
    });
});


function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}
