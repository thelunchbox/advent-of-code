const { findKey, sum } = require('../helpers.js');

const numberMap = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
};

const matchPart1 = /(\d)/;
const matchPart2 = /(\d)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)/;

const convertToNumbers = array => array.map(number => {
  if (number.match(/\d/)) return parseInt(number, 10);
  else return numberMap[number];
});

const findMatches = (string, regex) => {
  let workingString = string;
  let found = workingString.match(regex);
  const matches = [];
  while (found) {
    const matchingString = found[0];
    matches.push(matchingString);
    workingString = workingString.substring(found.index + 1);
    found = workingString.match(regex);
  }
  return matches;
};

module.exports = (input) => {

  const getValues = (regex) => input.map(line => {
    const matches = findMatches(line, regex);
    if (matches.length === 0) return 0;
    console.log(`${line} [${matches.join(', ')}]`);
    const firstMatch = matches.shift();
    const lastMatch = matches.pop() || firstMatch;
    const [first, last] = convertToNumbers([firstMatch, lastMatch]);
    console.log(`\t[${firstMatch}, ${lastMatch}] = ${first * 10 + last}`);
    return first * 10 + last;
  });
  
  // quinn's part 2: 54824

  const part1 = sum(getValues(matchPart1));
  console.log('-----------------------------------------------------------------------------------------------------------------------------');
  console.log('-----------------------------------------------------------------------------------------------------------------------------');
  console.log('-----------------------------------------------------------------------------------------------------------------------------');
  const part2 = sum(getValues(matchPart2));

  return {
    part1,
    part2,
  };
}