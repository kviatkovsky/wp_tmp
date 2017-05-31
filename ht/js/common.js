$(document).ready(function() {
  $(".main_head").css("min-height", $(window).height());
});
$(".toggle_mnu").click(function(){
	if($(".top_mnu").is(":visible")){
		$(".top_mnu").fadeOut(600);
} else {
	$(".top_mnu").fadeIn(600);
}
});

$(".toggle_mnu, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

