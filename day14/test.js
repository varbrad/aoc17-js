const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

describe('Day 14', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1('flqrgnkx'), 'to be', 8108)
    })
  })
})
