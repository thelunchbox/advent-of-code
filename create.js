const fs = require('fs');
const path = require('path');

const year = new Date().getFullYear();

const day = process.argv[2];

fs.copyFileSync(path.resolve(__dirname, '_template.js'), path.resolve(__dirname, `${year}/${day}.js`));
fs.writeFileSync(path.resolve(__dirname, `${year}/${day}.txt`), '');
fs.writeFileSync(path.resolve(__dirname, `${year}/${day}-debug.txt`), '');