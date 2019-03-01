export var a = function() {

	var controller = Object();
	
	controller.index = function(req: any, res: any) {
		res.render('teste');
	};	

	return controller;
}