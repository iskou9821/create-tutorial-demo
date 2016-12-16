window.tutorial = {}

tutorial.start = function() {
	$('body').append($('<div class="tutorial-screen"></div>'));
};

tutorial.end = function() {
	$('div.tutorial-screen').remove();	
};

tutorial.showDialog = function(element_path, page_path) {
	return $.get('./tutorial_dialog.html').then(function(html) {
		$('body').append($(html));
		return $.get(page_path);
	}).then(function(html) {
		var element = $(element_path);
		var dialog = $('div.tutorial-dialog');
		dialog.show();

		$('div.content-main', dialog).append(html);

		element.addClass('tutorial-dialog-target');
		dialog.css('left', element.offset().left + element.width() + 20);
		dialog.css('top', element.offset().top);

		var d = $.Deferred();
		$('div.tutorial-dialog div.content div.next-button').click(function() {
			element.removeClass('tutorial-dialog-target');
			dialog.remove();
			d.resolve();
		});
		$('div.tutorial-dialog div.content div.cancel-button').click(function() {
			element.removeClass('tutorial-dialog-target');
			dialog.remove();
			d.reject();
		});
		return d.promise();
	});
};
