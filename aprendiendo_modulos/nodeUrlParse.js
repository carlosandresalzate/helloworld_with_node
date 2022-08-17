console.log('inicio');
const url = require('url');

const myURL1 = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

const myURL2 = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(myURL1);
console.log('-----');
console.log(myURL2);