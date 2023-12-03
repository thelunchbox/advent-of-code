const { findKey, sum } = require('../helpers.js');

const limits = {
  red: 12,
  green: 13,
  blue: 14,
};

module.exports = (input) => {

  const validGames = [];

  const gamePowers = input.map((line, index) => {
    const pulls = line.split(':')[1].split(';');
    const maximums = {
      red: 0,
      green: 0,
      blue: 0,
    };
    const valid = pulls.map(pull => {
      const components = pull.split(',').map(s => s.trim());
      return components.map(x => x.split(' ')).map(([amtText, color]) => {
        const amt = parseInt(amtText);
        if (amt > maximums[color]) maximums[color] = amt;
        return amt <= limits[color];
      }).every(x => x);
    }).every(x => x);
    if (valid) validGames.push(index + 1);
    return (maximums.red * maximums.green * maximums.blue);
  });
  
  const part1 = sum(validGames);
  const part2 = sum(gamePowers);

  return {
    part1,
    part2,
  };
}