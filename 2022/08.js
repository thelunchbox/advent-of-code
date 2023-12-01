const { findKey, sortAsc } = require('../helpers.js');

module.exports = (input) => {

  const forest = input.map(row => row.split('').map(t => parseInt(t)));
  const height = forest[0].length;
  const width = forest.length;
  let maxScenicScore = 0;

  const visible = (r, c) => {
    let treeIsVisible = false;

    const treeHeight = forest[r][c];
    // check 4 directions - faster to check the shortest directions first
    const distance = {
      up: r,
      left: c,
      down: width - 1 - r,
      right: height - 1 - c,
    };
    const directionOrder = Object.entries(distance).sort(((a, b) => a[1] - b[1])).map(([k, v]) => k);
    
    let myScenicScore = 1;
    for (let direction of directionOrder) {
      let visibleFromDirection = true;
      let scenic = 0;
      switch(direction) {
        case 'up':
          for (let x = r - 1; x >= 0; x--) {
            scenic += 1;
            if (forest[x][c] >= treeHeight) {
              visibleFromDirection = false;
              break;
            }
          }
          break;
        case 'left':
          for (let x = c - 1; x >= 0; x--) {
            scenic += 1;
            if (forest[r][x] >= treeHeight) {
              visibleFromDirection = false;
              break;
            }
          }
          break;
        case 'down':
          for (let x = r + 1; x < height; x++) {
            scenic += 1;
            if (forest[x][c] >= treeHeight) {
              visibleFromDirection = false;
              break;
            }
          }
          break;
        case 'right':
          for (let x = c + 1; x < width; x++) {
            scenic += 1;
            if (forest[r][x] >= treeHeight) {
              visibleFromDirection = false;
              break;
            }
          }
          break;
      }
      myScenicScore *= scenic;
      if (visibleFromDirection) { // may get set more than once but who cares now
        treeIsVisible = true;
      }
    }
    if (myScenicScore > maxScenicScore) maxScenicScore = myScenicScore;
    return treeIsVisible;
  };

  // we don't need to check any of the trees on the edges because we know the're visible
  // and they also have scenic scores of 0
  let visibleTrees = (height + width - 2) * 2;
  for (let r = 1; r < height - 1; r += 1) {
    for (let c = 1; c < width - 1; c += 1) {
      if (visible(r, c)) visibleTrees += 1;
      // else grid[r][c] = ' ';
    }
  }

  // console.log(grid.map(row => row.join('')).join('\n'));
  
  const part1 = visibleTrees;
  const part2 = maxScenicScore;

  return {
    part1,
    part2,
  };
}