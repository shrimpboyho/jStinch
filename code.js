//Initially hide the work pane

$('#workPage').hide();

// Set up the interface swap

$('#startButton').click(function(){

  $('#startPage').hide();
  $('#workPage').show();
  $('#ads').hide();

});


//Set up the ide

  var myCodeMirrorHTML = CodeMirror.fromTextArea(htmlArea,{ 
     mode:  "html", 
     lineNumbers: true,
     theme: "ambiance"}
     );
  var myCodeMirrorCSS = CodeMirror.fromTextArea(cssArea,{ 
     mode: "css",
     lineNumbers: true,
     theme: "ambiance"}
     );
  var myCodeMirrorJAVASCRIPT = CodeMirror.fromTextArea(javascriptArea,{ 
     mode: "javascript",
     lineNumbers: true,
     theme: "ambiance"}
     );


// Run button click

$("#runButton").click(function() {
   
   var kinch = myCodeMirrorHTML.getValue();
   
   if(/* JQUERY IS SELECTED */true){
     
     kinch = kinch + "<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>";
     
   }
   
   kinch = kinch + "<script>" + myCodeMirrorJAVASCRIPT.getValue() + "</script>";
   kinch = ("<style type='text/css'>" + myCodeMirrorCSS.getValue() + "</style>") + kinch;
   console.log(kinch);
   
      var $frame = $('#outputarea');
	setTimeout( function() {
		var doc = $frame[0].contentWindow.document;
		var $body = $('body',doc);
		$body.html(kinch);
	}, 1 );
   
  
});