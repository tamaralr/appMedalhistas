var a = function() {

	var controller = {};
	
	controller.index = function(req, res) {
		res.render('index');
		res.render('teste');
	};	

	return controller;
}

module.exports = a;