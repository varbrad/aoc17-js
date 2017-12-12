const fs = require('fs')
const path = require('path')

const { solve1 } = require('./solve')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), {
  encoding: 'utf-8'
})

console.time('solve1()')
const p1 = solve1(input)
console.timeEnd('solve1()')

console.log('Day 12, Part 1:', p1)
