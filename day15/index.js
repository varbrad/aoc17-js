const fs = require('fs')
const path = require('path')

const { solve1, solve2 } = require('./solve')

const [a, b] = [116, 299]

console.time('solve1()')
const p1 = solve1(a, b)
console.timeEnd('solve1()')

console.time('solve2()')
const p2 = solve2(a, b)
console.timeEnd('solve2()')

console.log('Day 15, Part 1:', p1)
console.log('Day 15, Part 2:', p2)
