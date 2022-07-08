// practica del modulo OS
const os = require('os');

let loadAverage = os.loadavg();
let platform = os.platform();
let release = os.release();
let userInfo = os.userInfo();
let version = os.version();
let networkInterfaces = os.networkInterfaces();
console.log(loadAverage);
console.log(os.EOL)
console.log(userInfo)

let setInfo = `${platform}, ${release}, ${version} ${userInfo.username}, homedir:${userInfo.homedir}, Shell:${userInfo.shell}`;

console.log(setInfo)