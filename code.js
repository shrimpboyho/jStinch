//Initially hide the work pane

$('#workPage').hide();

// Set up the interface swap

$('#startButton').click(function(){

  $('#startPage').hide();
  $('#workPage').show();
  $('#ads').hide();

});
$('#homepageButton').click(function(){

  $('#startPage').show();
  $('#workPage').hide();
  $('#ads').show();

});


//Set up the ide


  var myCodeMirrorHTML =  $('#htmlArea').codemirror({
    mode: 'html',
    lineNumbers: true
  });
  var myCodeMirrorCSS = $('#cssArea').codemirror({
    mode: 'css',
    lineNumbers: true
  });
  var myCodeMirrorJAVASCRIPT = $('#javascriptArea').codemirror({
    mode: 'javascript',
    lineNumbers: true
  });


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