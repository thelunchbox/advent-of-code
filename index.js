const fs = require('fs');

const day = process.argv[2];
const debug = process.argv.includes('-d');

const processor = require(`./${day}.js`);
const file = fs.readFileSync(`${day}${debug ? '-debug' : ''}.txt`, 'utf8');

console.log(processor(file.split('\r').join('').split('\n')));