export var a = function() {

	var controller = Object();
	
	controller.index = function(req: any, res: any) {
		res.render('index', {index: "index"} );
	};	

	return controller;
}