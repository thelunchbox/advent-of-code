const { findKey, sum } = require('./helpers.js');

const SELECTION_SCORE_MAP = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};

const NAME_MAP = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'rock',
  Y: 'paper',
  Z: 'scissors',
};

const TRANSLATE_MAP_P1 = {
  A: 'X', // rock
  B: 'Y', // paper
  C: 'Z', // scissors
};

const WHAT_BEATS_THIS_MAP_P1 = {
  A: 'Y',
  B: 'Z',
  C: 'X',
};

const WHAT_WINS_MAP_P2 = {
  A: 'B',
  B: 'C',
  C: 'A',
};

const OUTCOME_SCORE = {
  X: 0,
  Y: 3,
  Z: 6,
};

module.exports = (input) => {
  // part 1 - under incorrect conclusion
  const getOutcome = (them, me) => {
    if (TRANSLATE_MAP_P1[them] === me) {
      return 3;
    }
    if (WHAT_BEATS_THIS_MAP_P1[them] === me) {
      return 6;
    }
    return 0;
  }

  const scorePerRound = input.map(round => {
    const [them, me] = round.split(' ');
    return SELECTION_SCORE_MAP[me] + getOutcome(them, me);
  });

  // part 2 - new information
  // X = lose, Y = tie, Z = win

  const scorePerRound2 = input.map(round => {
    const [them, outcome] = round.split(' ');
    let me;
    switch(outcome) {
      case 'X': 
        me = findKey(WHAT_WINS_MAP_P2, them);
        break;
      case 'Y':
        me = them;
        break;
      case 'Z':
        me = WHAT_WINS_MAP_P2[them];
        break;
    }
    return SELECTION_SCORE_MAP[me] + OUTCOME_SCORE[outcome];
  });

  const part1 = sum(scorePerRound);
  const part2 = sum(scorePerRound2);

  return {
    part1,
    part2,
  };
}