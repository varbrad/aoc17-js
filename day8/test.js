const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

const example1 = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`

describe('Day 8', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1(example1), 'to be', 1)
    })
  })
})
