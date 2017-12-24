const fs = require('fs')
const path = require('path')

const { solve } = require('./solve')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), {
  encoding: 'utf-8'
})

console.time('solve()')
const [p1, p2] = solve(input)
console.timeEnd('solve()')

console.log('Day 24, Part 1:', p1)
console.log('Day 24, Part 2:', p2)
