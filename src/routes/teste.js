// app/routes/home.js
var controller = require('../controllers/teste')();

var a = function(app) {
	//console.log(app)
	app.get('/teste', controller.index);
	app.get('/', controller.index);
}

module.exports = a;