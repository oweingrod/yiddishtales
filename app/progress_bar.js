

// $(document).ready(function() {
//   var progressBar = $('progress');
//   var max, value;

//   //set a timeout of 300ms because you can't read the correct height until angular renders
//   setTimeout(function() {
//     var docHeight = $(document).height();
//     var winHeight = $(window).height();
//     max = docHeight - winHeight;
//     $('progress').attr('max', max);

//   }, 300);



//   /* Set the max scrollable area */
//   $(document).on('scroll', function(){
//      value = $(window).scrollTop();
//      $('progress').attr('value', value);
//      console.log("value " + value);
//      console.log("max " + max);
//      if (progressBar.attr('value') === value)
//       console.log("we're in the clear");
//      else 
//       console.log('hmm');

//   });






// });