	
$(window).scroll(function() {
$('#object').each(function(){
var imagePos = $(this).offset().top;

var topOfWindow = $(window).scrollTop();
	if (imagePos < topOfWindow+500) {
		$(this).addClass("slideRight");
	}
});
});