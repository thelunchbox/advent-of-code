const { findKey, sum } = require('../helpers.js');

module.exports = (input) => {

  const buffer = input[0].split(''); // it's just one line so it's all here
  
  const findUniqueSequence = (length) => {
    let position = length - 1;
    let check = buffer.slice(0, position);

    const advanceCheck = (steps) => {
      check.splice(0, steps);
      check = [...check, ...buffer.slice(position, position + steps)];
      position += steps;
    }

    const clearDuplicatesInCheck = () => {
      for (let index = check.length - 2; index >= 0; index -= 1) {
        if (check.slice(index + 1).includes(check[index])) {
          advanceCheck(index + 1);
          return true;
        }
      }
    };

    while (position < buffer.length) {
      while(clearDuplicatesInCheck()) {};
      const index = check.indexOf(buffer[position]);
      // console.log('>> ', position, check.join(''), buffer[position], buffer.slice(position + 1, position + 10).join('') + '...', buffer.slice(position, position + index + 1).join(''));
      if (index < 0) {
        // we're done!
        position += 1;
        break;
      }
      advanceCheck(index + 1);
    }

    return position;
  };

  const part1 = findUniqueSequence(4);
  const part2 = findUniqueSequence(14);

  return {
    part1,
    part2,
  };
}