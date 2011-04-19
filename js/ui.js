refreshed = true;

function refresh() {
	refreshed = false;
	slideCounter = Math.max(slideCounter, 0);
	slideCounter = Math.min(slideCounter, slides.length-1);
	$('#slidecounter').html(parseInt(slideCounter+1) + "/" + slides.length);
	$('#slidecontent').fadeOut(100, function() {
		$('#slidecontent').html(slides[slideCounter]);
		prettyPrint();
		$('#slidecontent').fadeIn(100, function() {
			refreshed = true;
		});
	});
}

$(document).keydown(function(e) {
	if (refreshed) {
		if (e.keyCode == 37) {
			slideCounter--;
			refresh();
			return false;
		}
		if (e.keyCode == 39) {
			slideCounter++;
			refresh();
			return false;
		}
		if (e.keyCode == 27) {
			$("#slide").hide();
			$("#srcForm").show();
		}
	}
});

$(document).mousedown(function(e) {
	if (e.which == 1) {
		slideCounter++;
		refresh();
	}
});