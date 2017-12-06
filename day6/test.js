const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

describe('Day 6', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1('0\t2\t7\t0'), 'to be', 5)
    })
  })
  describe('Part 2', function() {
    it('Example 1', function() {
      expect(solve2('0\t2\t7\t0'), 'to be', 4)
    })
  })
})
