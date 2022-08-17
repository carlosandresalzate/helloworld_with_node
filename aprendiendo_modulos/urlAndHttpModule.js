console.log('inicio');
const http = require('http');
const url = require('url');

// ejemplo de URL tomado de la documentacion de Nodejs
// uso el modulo url + el metodo parse que me devuelve un objeto.
// obtengo la url como un objeto
const myURL = url.parse('https://user:pass@sub.example.com:8080/');
// const myURL = url.parse('https://localhost.com:3000')
console.log(myURL);

// obtengo el valor de pathname el cual hace parte del objeto URL
let myPath = myURL.pathname;
console.log(myPath);


// recorto el path usando regex y  el metodo replace() de javascript
let myTrimmedPath = myPath.replace(/^\/+|\/+$/g, '');

myPath = 'pathname/';

myTrimmedPath = myPath.replace(/^\/+|\/+$/g, '');
console.log(myTrimmedPath);
// ?query=string#hash
// const myQueryStringObject = myURL.query;
// console.log(myQueryStringObject)





