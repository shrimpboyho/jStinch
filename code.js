//Initially hide the work pane and the loading bar

$('#workPage').hide();
$('#loadingBarContainer').hide();

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
    theme: 'monokai',
    lineNumbers: true
  });
  var myCodeMirrorCSS = $('#cssArea').codemirror({
    mode: 'css',
    theme: 'monokai',
    lineNumbers: true
  });
  var myCodeMirrorJAVASCRIPT = $('#javascriptArea').codemirror({
    mode: 'javascript',
    theme: 'monokai',
    lineNumbers: true
  });


// Run button click

$("#runButton").click(function() {


   /* LOADING BAR ANIMATION */

   $('#loadingBarContainer').show();

       setTimeout(function(){

        $('.progress .bar').each(function() {
            var me = $(this);
            var perc = me.attr("data-percentage");

            //TODO: left and right text handling

            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc>=100) {
                    
                    setTimeout(function(){
                      clearInterval(progress);
                      $('#loadingBarContainer').hide();
                     },50); 
                } else {
                    current_perc +=4;
                    me.css('width', (current_perc)+'%');
                }

                me.text((current_perc)+'%');

            }, 50);

        })});

   $('#loadingBar').css('width', 0 +'%')

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
