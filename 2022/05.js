const { cloneDeep, findKey, sum } = require('../helpers.js');

module.exports = (input) => {

  const blank = input.indexOf('');
  const columnIndices = input[blank-1];
  const columnCount = columnIndices.split(' ').filter(x => x != '').length;
  const stacks = new Array(columnCount).fill(0).map(() => ([]));

  for (let r = blank-2; r >= 0; r -= 1) {
    const row = input[r].split('');
    for (let c = 0; c < columnCount; c += 1) {
      const crate = row.splice(0, 4)[1];
      if (crate != ' ') stacks[c].push(crate);
    }
  }

  const stacks2 = cloneDeep(stacks);

  // instructions cratemover 9000

  input.slice(blank + 1).forEach(instruction => {
    const [_, count, __, src, ___, dst] = instruction.split(' ');
    const from = parseInt(src) - 1;
    const to = parseInt(dst) - 1;
    let x = parseInt(count);
    while (x--) {
      stacks[to].push(stacks[from].pop());
    }
  });

  // instructions cratemover 9001

  input.slice(blank + 1).forEach(instruction => {
    const [_, count, __, src, ___, dst] = instruction.split(' ');
    const from = parseInt(src) - 1;
    const to = parseInt(dst) - 1;
    let x = parseInt(count);
    stacks2[to] = [...stacks2[to], ...stacks2[from].splice(-x)];
  });
  
  const part1 = stacks.map(stack => [...stack].reverse()[0]).join('');
  const part2 = stacks2.map(stack => [...stack].reverse()[0]).join('');

  return {
    part1,
    part2,
  };
}