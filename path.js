const path = require("path");

console.log('skelit',path.join(__dirname , 'first','second'));
const fullpath = path.join(__dirname , 'first','third','third.js');
console.log('parse', path.parse(fullpath));


const siteURL = 'http://localhost:4000/users?id=5123';

const url = new URL(siteURL);

console.log(url);