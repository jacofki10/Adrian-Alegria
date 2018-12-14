/*Menu*/
$(document).ready(function(){
	checkURL();
	$('ul li a').click(function (e){ checkURL(this.hash); } );
	//filling in the default content
	default_content = $('#pageContent').html();
	setInterval("checkURL()",250);
	}
);
var lasturl = "";
function checkURL(hash) {
    if(!hash) hash = window.location.hash;
	if(hash != lasturl){   
	  lasturl=hash;
	  // FIX - if we've used the history buttons to return to the homepage,
	  // fill the pageContent with the default_content
	  if(hash == ""){
		$('#pageContent').html(default_content);}
	  else{
		loadPage(hash);}
	 }
}
function loadPage(url) {
	url = url.replace('#','');
	$('#loading').css('visibility','visible');
	$.ajax({
		type: "POST",
		url: "load_page.php",
		data: 'p='+url,
		dataType: "html",
		success: function(msg){ if(parseInt(msg)!=0) {$('#pageContent').html(msg); } }
	});
}
// Button active
var make_button_active = function() {
  //Get item siblings
  var siblings =($(this).siblings());
  //Remove active class on all buttons
  siblings.each(function (index) {$(this).removeClass('active');} )
  //Add the clicked button class
  $(this).addClass('active');
}
//Attach events to menu
$(document).ready( function() {$("#app-menu li").click(make_button_active);})