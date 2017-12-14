const day10 = require('../day10/solve')

function solve1(n) {
  let filled = 0
  for (let i = 0; i < 128; ++i) {
    const hash = day10.solve2(256, n + '-' + i)
    for (let k = 0; k < hash.length; k += 2) {
      // For every byte
      let bin = parseInt(hash.slice(k, k + 2), 16).toString(2)
      // Get count of 1's
      filled += bin
        .split('')
        .reduce((acc, cur) => (cur === '1' ? acc + 1 : acc), 0)
    }
  }
  return filled
}

module.exports = {
  solve1
}
