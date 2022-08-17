console.log('inicio');
const url = require('url');
const path = require('path');
const fs = require('fs');
const folder = './';
/*
fs.readdirSync( folder ).forEach( file => {
	const extname = path.extname(file);
	const filename = path.basename(file, extname);
	const absolutePath = path.resolve(folder, file);

	console.log("File: ", file);
	console.log("filename: ", filename);
	console.log("extname: ", extname)
	console.log("absolutePath: ", absolutePath);
});*/


// no hace lo que pienso.
const myURL = url.parse(__filename)
console.log(myURL)

// esto trae la ruta del archivo en el que estoy
console.log(__dirname)
console.log(__filename)