const fs = require('fs');

const day = process.argv[2];
const yearParam = process.argv[3];
const debug = process.argv.includes('-d');

const debugFile = process.argv[process.argv.indexOf('-d') + 1] || 'debug';

const year = (yearParam && yearParam != '-d') ? yearParam : new Date().getFullYear();

  const processor = require(`./${year}/${day}.js`);
  const file = fs.readFileSync(`${year}/${day}${debug ? '-' + debugFile : ''}.txt`, 'utf8');
  console.log(processor(file.split('\r').join('').split('\n')));