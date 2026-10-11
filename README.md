# Fibonacci Iterator

A `Fibonacci` object that returns the first N Fibonacci numbers through the JavaScript iteration protocol (`Symbol.iterator`). Assignment from the Tel-Ran Full Stack Developer program (topic: iterators).

> Status: in progress. The iterator is not implemented yet, so the tests currently fail.

## Tech stack

- JavaScript (ES modules)
- Jest 30

## Expected behavior

```js
import { Fibonacci } from './model/fibonacci.js';

const fib = new Fibonacci(8);

console.log([...fib]);      // [1, 1, 2, 3, 5, 8, 13, 21]

for (const n of fib) {
  // works with for...of
}
```

## Tests

`tests/fibonaci.test.js` checks:

- 8 elements → `[1, 1, 2, 3, 5, 8, 13, 21]`
- 2 elements → `[1, 1]`
- 1 element → `[1]`
- the sum of the first 8 elements equals 54

## Getting started

```bash
git clone https://github.com/mspopov-dev/fibonacci.git
cd fibonacci
npm install
npm test
```

## Author

Mikhail Popov — [GitHub](https://github.com/mspopov-dev) · [LinkedIn](https://www.linkedin.com/in/mspopov-dev)
