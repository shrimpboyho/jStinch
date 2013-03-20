//Initially hide the work pane

$('#workPage').hide();

// Set up the interface swap

$('#startButton').click(function(){

  $('#startPage').hide();
  $('#workPage').show();
  $('#ads').hide();


});





// Run button click

$("#runButton").click(function() {
   
   var kinch = $("#htmlfield").val();
   
   if(/* JQUERY IS SELECTED */true){
     
     kinch = kinch + "<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>";
     
   }
   
   kinch = kinch + "<script>" + $("#jsfield").val() + "</script>";
   kinch = ("<style type='text/css'>" + $("#cssfield").val() + "</style>") + kinch;
   alert(kinch);
   
      var $frame = $('#outputarea');
	setTimeout( function() {
		var doc = $frame[0].contentWindow.document;
		var $body = $('body',doc);
		$body.html(kinch);
	}, 1 );
   
  
});