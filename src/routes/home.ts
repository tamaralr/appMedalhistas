import * as controller from "../controllers/home";

export var a = function(app: any) {
	//console.log(app)

	app.get('/index', controller.a().index);
	app.get('/', controller.a().index);
}