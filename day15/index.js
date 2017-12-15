const fs = require('fs')
const path = require('path')

const { solve1 } = require('./solve')

const [a, b] = [116, 299]

console.time('solve1()')
const p1 = solve1(a, b)
console.timeEnd('solve1()')

console.log('Day 15, Part 1:', p1)
