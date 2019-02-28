var app = require('./config/express')();
//import express from "./config/express";

app.listen(app.get('port'), function(req, res){
	console.log("Servidor rodando com Express");
});

