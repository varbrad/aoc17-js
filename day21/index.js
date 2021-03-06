const fs = require('fs')
const path = require('path')

const { solve1 } = require('./solve')

const start = `.#.
..#
###`

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), {
  encoding: 'utf-8'
})

console.time('solve1()')
const p1 = solve1(start, input, 5)
console.timeEnd('solve1()')

console.time('solve2()')
const p2 = solve1(start, input, 18)
console.timeEnd('solve2()')

console.log('Day 21, Part 1:', p1)
console.log('Day 21, Part 2:', p2)
