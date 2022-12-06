module.exports = {
  sum: (arr) => arr.reduce((a, b) => a + b, 0),
  findKey: (obj, value) => Object.entries(obj).find(([k, v]) => v === value)[0],
};
