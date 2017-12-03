const expect = require('unexpected')

const { solve1 } = require('./solve')

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
})
