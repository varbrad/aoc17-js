const fs = require('fs')
const path = require('path')

const { solve1 } = require('./solve')

const input = 'wenycdww'

console.time('solve1()')
const p1 = solve1(input)
console.timeEnd('solve1()')

console.log('Day 14, Part 1:', p1)
