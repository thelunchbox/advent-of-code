const { findKey, sum } = require('./helpers.js');

const LOWERCASE_BASIS = 'a'.charCodeAt(0) - 1;
const UPPERCASE_BASIS = 'A'.charCodeAt(0) - 27;

const convertToPriority = (chr) => {
  let value = chr.charCodeAt(0);
  if (chr.match(/[A-Z]/)) {
    value -= UPPERCASE_BASIS;
  } else if (chr.match(/[a-z]/)) {
    value -= LOWERCASE_BASIS;
  }
  return value;
}

module.exports = (input) => {

  // find the length of each string
  // cut it in half
  // find the character that is both in the first and second half
  // convert it to it's 'priority'
  const priorities = input.map(rucksack => {
    const split = rucksack.length / 2;
    const c1 = rucksack.substr(0, split);
    const c2 = rucksack.substr(split);
    const common = c1.split('').find(chr => c2.includes(chr));
    return convertToPriority(common);
  });

  const groups = [];
  for (let i = 0; i < input.length; i += 3) {
    const e1 = input[i];
    const e2 = input[i + 1];
    const e3 = input[i + 2];
    const common = e1.split('').find(chr => e2.includes(chr) && e3.includes(chr));
    groups.push(convertToPriority(common));
  }
  
  const part1 = sum(priorities);
  const part2 = sum(groups);

  return {
    part1,
    part2,
  };
}