const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

const data = `0: 3
1: 2
4: 4
6: 4`

describe('Day 13', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1(data), 'to be', 24)
    })
  })
  describe('Part 2', function() {
    it('Example 2', function() {
      expect(solve2(data), 'to be', 10)
    })
  })
})
