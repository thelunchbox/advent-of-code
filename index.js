const fs = require('fs');

const day = process.argv[2];
const yearParam = process.argv[3];
const debug = process.argv.includes('-d');


const year = (yearParam && yearParam != '-d') ? yearParam : new Date().getFullYear();

try {
  const processor = require(`./${year}/${day}.js`);
  const file = fs.readFileSync(`${year}/${day}${debug ? '-debug' : ''}.txt`, 'utf8');
} catch (ex) {
  console.error(`Could not run this day:`);
  console.error(ex.message);
}
console.log(processor(file.split('\r').join('').split('\n')));