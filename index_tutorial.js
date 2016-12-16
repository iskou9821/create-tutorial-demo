$(function() {
	tutorial.start();
		
	tutorial.showDialog('input[name="input01"]', './items/01.html')
		.then(function() {
			return tutorial.showDialog('input[name="input02"]', './items/02.html');
		}).then(function() {
			return tutorial.showDialog('select[name="select01"]', './items/03.html');
		}).then(function() {
			return tutorial.showDialog('button[name="submit01"]', './items/04.html', true);
		}, function() {
			tutorial.end();
		});
	
});