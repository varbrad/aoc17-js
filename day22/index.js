const fs = require('fs')
const path = require('path')

const { solve1, solve2 } = require('./solve')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), {
  encoding: 'utf-8'
})

console.time('solve1()')
const p1 = solve1(input, 10000)
console.timeEnd('solve1()')

console.time('solve2()')
const p2 = solve2(input, 10000000)
console.timeEnd('solve2()')

console.log('Day 22, Part 1:', p1)
console.log('Day 22, Part 2:', p2)
