# max-diff

Find the split point in an array where the difference between the maximum integer on each side is highest.

## example

```
[1, 3, -3]
split at 1 -> [1], [3, -3] -> max is 1 (L) and 3 (R); abs diff = 2
split at 2 -> [1, 3], [-3] -> max is 3 (L) and -3 (R); abs diff = 6 (return split point 2 as 6 > 2)
```

## test

```
npm test

PASS  ./index.spec.js
  ✓ returns 2 for [1, 3, -3] (4ms)
```

## test coverage
```
./node_modules/.bin/jest --coverage

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |    66.67 |      100 |      100 |                   |
 index.js |      100 |    66.67 |      100 |      100 |             10,15 |
----------|----------|----------|----------|----------|-------------------|
```
