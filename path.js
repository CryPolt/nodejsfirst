const path = require("path");

console.log('skelit',path.join(__dirname , 'first','second'));
const fullpath = path.join(__dirname , 'first','third','third.js');
console.log('parse', path.parse(fullpath));


const sitreURL = 'http://localhost:3000/users?id=5123';

const url = new URL(sitreURL);

console.log(url);