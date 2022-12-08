const cloneDeep = (arr) => arr.map((item) => {
  if (Array.isArray(item)) return cloneDeep(item);
  return item;
});

module.exports = {
  sortAsc: (a, b) => a - b,
  sum: (arr) => arr.reduce((a, b) => a + b, 0),
  findKey: (obj, value) => Object.entries(obj).find(([k, v]) => v === value)[0],
  cloneDeep,
};
