const maxDiff = require('./index.js')

test('returns 2 for [1, 3, -3]', () => {
  expect(maxDiff([1, 3, -3])).toBe(2);
});
