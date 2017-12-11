const expect = require('unexpected')

const { solve1 } = require('./solve')

describe('Day 11', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1('ne,ne,ne'), 'to be', 3)
    })
    it('Example 2', function() {
      expect(solve1('se,nw,n,s,s,nw'), 'to be', 1)
    })
    it('Example 3', function() {
      expect(solve1('ne,ne,sw,sw'), 'to be', 0)
    })
    it('Example 4', function() {
      expect(solve1('se,sw,se,sw,sw'), 'to be', 3)
    })
    it('Example 5', function() {
      expect(solve1('ne,ne,s,s'), 'to be', 2)
    })
  })
})
