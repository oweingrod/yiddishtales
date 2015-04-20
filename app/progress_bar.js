

$(document).ready(function() {
  var winHeight = $(window).height(), 
      docHeight = getDocHeight(),
      progressBar = $('progress'),
      max, value;

      max = docHeight - winHeight;


  /* Set the max scrollable area */
  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
     console.log(value);
     console.log('Docheight ' + docHeight);
     console.log('Winheight ' + winHeight);
  });
});


function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}