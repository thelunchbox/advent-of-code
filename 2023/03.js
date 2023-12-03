const { findKey, sum } = require('../helpers.js');

const specialChars = /[^A-Za-z0-9.\s]/;

module.exports = (input) => {

  const parts = [];
  const gears = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      const match = input[i].substring(j).match(/^\d+/);
      if (match) {
        const getLocalSubstring = (input, index, length) => {
          const start = index > 0 ? index - 1 : index;
          const end = index + length + 1 < input.length ? index + length + 1 : input.length;
          return input.substring(start, end);
        }
        const number = parseInt(match[0]);
        const above = i > 0 ? getLocalSubstring(input[i-1], j, match[0].length) : '';
        const same = getLocalSubstring(input[i], j, match[0].length);
        const below = i + 1 < input.length ? getLocalSubstring(input[i+1], j, match[0].length) : '';
        console.log(match[0]);
        console.log(`
        ${above}
        ${same}
        ${below}`);
        const found = `${above}${same}${below}`.match(specialChars);
        if (found) {
          parts.push(number);
          if (found[0] === '*') {
            const foundAbove = above.match(specialChars);
            const foundSame = same.match(specialChars);
            const foundBelow = below.match(specialChars);
            let row, col;
            if (foundAbove) {
              console.log(`found in foundAbove, ${foundAbove.index}`);
              row = i - 1;
              col = j === 0 ? foundAbove.index : foundAbove.index + j - 1
            }
            else if (foundSame) {
              console.log(`found in foundSame, ${foundSame.index}`);
              row = i;
              col = j === 0 ? foundSame.index : foundSame.index + j - 1
            }
            else if (foundBelow) {
              console.log(`found in foundBelow, ${foundBelow.index}`);
              row = i + 1;
              col = j === 0 ? foundBelow.index : foundBelow.index + j - 1
            }

            console.log(`Gear is located at ${row},${col}`);

            let gear = gears.find(g => g.i === row && g.j === col);
            if (!gear) {
              gear = { i: row, j: col, parts: []};
              gears.push(gear);
            } 
            gear.parts.push(number);
            // find or create gear
            // add part number
          }
        }
        j += match[0].length - 1;
      }
    }
  }

  console.log(gears);
  
  const part1 = sum(parts);
  const part2 = sum(gears.filter(g => g.parts.length === 2).map(g => g.parts.reduce((a, b) => a * b, 1)));

  return {
    part1,
    part2,
  };
}