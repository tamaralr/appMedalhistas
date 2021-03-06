var express = require('express');
var load = require('consign')
var bodyParser = require('body-parser');


module.exports = function() {
  var app = express();

  app.set('port', 3000);

  //app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views','./site/views');
  // novos middlewares
  app.use(bodyParser.json());

  app
  app.use(bodyParser.urlencoded({extended: true}));
  //app.use(express.static('./public'));
  //app.use(require('method-override')());

  load('models', {cwd: 'dist'})
    .include('dist')
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};