

$(document).ready(function() {
  var progressBar = $('progress');
  var max, value;

  setTimeout(function() {
    max = $(document).height();
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