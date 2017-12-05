const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

describe('Day 4', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1('0\n3\n0\n1\n-3'), 'to be', 5)
    })
  })
  describe('Part 2', function() {
    it('Example 1', function() {
      expect(solve2('0\n3\n0\n1\n-3'), 'to be', 10)
    })
  })
})
