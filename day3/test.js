const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

describe('Day 3', function() {
  describe('Part 1', function() {
    it('1', function() {
      expect(solve1(1), 'to be', 0)
    })
    it('12', function() {
      expect(solve1(12), 'to be', 3)
    })
    it('23', function() {
      expect(solve1(23), 'to be', 2)
    })
    it('1024', function() {
      expect(solve1(1024), 'to be', 31)
    })
  })
  describe('Part 2', function() {
    it('29', function() {
      expect(solve2(29), 'to be', 54)
    })
    it('382', function() {
      expect(solve2(382), 'to be', 747)
    })
    it('802', function() {
      expect(solve2(802), 'to be', 806)
    })
  })
})
