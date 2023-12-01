const { findKey, sum } = require('../helpers.js');

module.exports = (input) => {
  const head = {
    x: 100,
    y: 100,
  };

  const tail = {
    x: 100,
    y: 100,
  };

  const updateTail = () => {
    const dx = head.x - tail.x;
    const dy = head.y - tail.y;
  };

  const tailPositions = {};

  input.map(x => x.split(' ')).forEach(([dir, c]) => {
    const count = Number.parseInt(c);
    const axis = ['R', 'L'].includes(dir) ? 'x' : 'y';
    const step = ['U', 'L'].includes(dir) ? -1 : 1;
    for (let i = 0; i < count; i++) {
      head[axis] += step;
      updateTail();
    }
  });
  
  const part1 = 'INCOMPLETE';
  const part2 = 'INCOMPLETE';

  return {
    part1,
    part2,
  };
}