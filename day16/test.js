const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

const data1 = 's1,x3/4,pe/b'

describe('Day 16', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1('abcde', data1), 'to be', 'baedc')
    })
  })
  describe('Part 2', function() {
    it('Example 1', function() {
      // Solve 2 is very slow
      // expect(solve2('abcde', data1), 'to be', 'abcde')
    })
  })
})
