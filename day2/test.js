const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

describe('Day 1', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1('5 1 9 5\n7 5 3  \n2 4 6 8'), 'to be', 18)
    })
    it('Example 2', function() {
      expect(
        solve1(
          '4 7 7 5 1 4\n2 11 12 3 9 2\n6 9 11 4 1 5\n1 5 6 2 4 1\n1 9 4 2 4 5'
        ),
        'to be',
        39
      )
    })
  })
  describe('Part 2', function() {
    it('Example 1', function() {
      expect(solve2('5 9 2 8\n9 4 7 3\n3 8 6 5'), 'to be', 9)
    })
  })
})
