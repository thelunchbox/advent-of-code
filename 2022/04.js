const { findKey, sum } = require('../helpers.js');

module.exports = (input) => {

  const fullyContainedMap = input.map(pair => {
    const [e1, e2] = pair.split(',');
    const [e1Min, e1Max] = e1.split('-').map(x => parseInt(x));
    const [e2Min, e2Max] = e2.split('-').map(x => parseInt(x));

    const e1ContainsE2 = e1Min <= e2Min && e1Max >= e2Max;
    const e2ContainsE1 = e2Min <= e1Min && e2Max >= e1Max;
    return e1ContainsE2 || e2ContainsE1;
  });

  const overlapMap = input.map((pair, index) => {
    const [e1, e2] = pair.split(',');
    const [e1Min, e1Max] = e1.split('-').map(x => parseInt(x));
    const [e2Min, e2Max] = e2.split('-').map(x => parseInt(x));

    const e1ThenE2 = e1Min <= e2Min && e1Max <= e2Max && e2Min <= e1Max;
    const e2ThenE1 = e2Min <= e1Min && e2Max <= e1Max && e1Min <= e2Max;
    return e1ThenE2 || e2ThenE1 || fullyContainedMap[index];
  });
  
  const part1 = fullyContainedMap.filter(x => x).length;
  const part2 = overlapMap.filter(x => x).length;

  return {
    part1,
    part2,
  };
}