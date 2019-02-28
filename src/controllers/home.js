var a = function() {

	var controller = {};
	
	controller.index = function(req, res) {
		res.render('index', {index: 'index'});
	};	

	return controller;
}

module.exports = a;