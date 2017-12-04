const fs = require('fs')
const path = require('path')

const { solve1 } = require('./solve')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), {
  encoding: 'utf-8'
})

console.log('Day 4, Part 1:', solve1(input))
