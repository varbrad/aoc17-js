const fs = require('fs')
const path = require('path')

const { solve1 } = require('./solve')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), {
  encoding: 'utf-8'
})

const p1 = solve1(input)

console.log('Day 7, Part 1:', p1)
