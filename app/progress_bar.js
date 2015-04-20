

$(document).ready(function() {
  var progressBar = $('progress');
  var max, value;

  //set a timeout of 300ms because you can't read the correct height until angular renders
  setTimeout(function() {
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    max = docHeight - winHeight;
    progressBar.attr('max', max);
  }, 300);
      


  /* Set the max scrollable area */
  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
     console.log(value);
     console.log(max);
  });






});