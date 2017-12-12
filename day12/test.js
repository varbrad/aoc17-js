const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

const data1 = `0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`

const data2 = `0 <-> 3, 4
1 <-> 2
2 <-> 1, 3, 4
3 <-> 0, 2
4 <-> 0, 2
5 <-> 5`

describe('Day 12', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1(data1), 'to be', 6)
    })
    it('Example 2', function() {
      expect(solve1(data2), 'to be', 5)
    })
  })
  describe('Part 2', function() {
    it('Example 1', function() {
      expect(solve2(data1), 'to be', 2)
    })
    it('Example 2', function() {
      expect(solve2(data2), 'to be', 2)
    })
  })
})
