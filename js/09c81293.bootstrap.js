/*added by Vadivelu 05/01/2016 - loading Bootstrap js based on the mini carousel or main carousel*/
	$(document).ready(function() {
	var jsPath = $("script[src*='09c81293.bootstrap.js']").attr('src');
	if ($(".promo-hero-block").length == 0) {
		//load the existing js if there is no minicarousel
		jsPath = jsPath.replace("09c81293.bootstrap.js", "09c81293.bootstrap-v1.js");
		$('<script type="text/javascript" src="'+jsPath+'"></script>').insertAfter($("script[src*='09c81293.bootstrap.js']"));
	} else {
		//load the new js if there is minicarousel
		jsPath = jsPath.replace("09c81293.bootstrap.js", "09c81293.bootstrap-v2.js");
		$('<script type="text/javascript" src="'+jsPath+'"></script>').insertAfter($("script[src*='09c81293.bootstrap.js']"));
	}
	});
/* end loading Bootstrap js based on the mini carousel or main carousel*/