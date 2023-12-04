const { findKey, sum } = require('../helpers.js');

module.exports = (input) => {

  const cardCounts = new Array(input.length).fill(1);

  const gamePoints = input.map((line, index) => {
    const game = line.split(':')[1].split('|').map(x => x.trim());
    const [winningNums, gameNums] = game.map(nums => nums.split(' ').filter(x => x));
    const matches = gameNums.filter(n => winningNums.includes(n));

    for (let m = 1; m <= matches.length; m++) {
      cardCounts[m + index] += cardCounts[index];
    }

    if (matches.length === 0) return 0;
    else return 2 ** (matches.length - 1);
  });
  
  const part1 = sum(gamePoints);
  const part2 = sum(cardCounts);

  return {
    part1,
    part2,
  };
}