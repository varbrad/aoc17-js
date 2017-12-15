const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

describe('Day 15', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      this.timeout(5000)
      expect(solve1(65, 8921), 'to be', 588)
    })
  })
  describe('Part 2', function() {
    it('Example 1', function() {
      this.timeout(5000)
      expect(solve2(65, 8921), 'to be', 309)
    })
  })
})
