







$(window).resize(function() {
   if ($(this).width() < 770) {
      $('#touchy').bind( "click touchstart", function(e){
        $('.navbar-collapse').collapse('hide');
		});
   }
});



$(document).ready(function() {
   $(window).resize();
});