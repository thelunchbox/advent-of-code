const { sum } = require('../helpers.js');

module.exports = (input) => {
  const elves = input.reduce((elves, cals) => {
    if (Number.isNaN(Number.parseInt(cals))) {
      return [...elves, 0];
    }
    const change = elves.pop() + Number.parseInt(cals);
    return  [...elves, change];
  }, [0]).sort((a, b) => a - b).reverse();

  const part1 = elves[0];
  const part2 = sum(elves.slice(0, 3));

  return {
    part1,
    part2,
  };
}