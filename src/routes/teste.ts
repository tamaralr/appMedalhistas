import * as controller from "../controllers/teste"

var a = function(app: any) {
	//console.log(app)
	app.get('/teste', controller.a().index);
	app.get('/', controller.a().index);
}