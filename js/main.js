$(document).ready(() => {
	$('#burger').click(() => {
		$('#fold').toggleClass('deployed');
	});
	$('#fold').click(() => {
		$('#fold').toggleClass('deployed');
	});
	$('#photography').click(() => {
		if ($('#photography-content').is(':visible')) {
			$('#photography-content').slideUp();
		} else {
			$('#photography-content').slideDown();
		}
	});
	$('#creativity').click(() => {
		if ($('#creativity-content').is(':visible')) {
			$('#creativity-content').slideUp();
		} else {
			$('#creativity-content').slideDown();
		}
	});
	$('#design').click(() => {
		if ($('#design-content').is(':visible')) {
			$('#design-content').slideUp();
		} else {
			$('#design-content').slideDown();
		}
	});
});