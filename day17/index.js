const fs = require('fs')
const path = require('path')

const { solve1 } = require('./solve')

const input = 377

console.time('solve1()')
const p1 = solve1(input)
console.timeEnd('solve1()')

console.log('Day 17, Part 1:', p1)
