const expect = require('unexpected')

const { solve1 } = require('./solve')

describe('Day 10', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1(5, '3,4,1,5'), 'to be', 12)
    })
  })
})
