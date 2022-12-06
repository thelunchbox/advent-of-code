const fs = require('fs');
const path = require('path');

const day = process.argv[2];

fs.copyFileSync(path.resolve(__dirname, '_template.js'), path.resolve(__dirname, `${day}.js`));
fs.writeFileSync(path.resolve(__dirname, `${day}.txt`), '');
fs.writeFileSync(path.resolve(__dirname, `${day}-debug.txt`), '');