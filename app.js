console.log(module);

const fs= require('fs');
const files=fs.readdirSync('./');
console.log(files);

fs.readdir('./',function(err,files){})