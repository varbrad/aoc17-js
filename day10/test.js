const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

describe('Day 10', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1(5, '3,4,1,5'), 'to be', 12)
    })
  })
  describe('Part 2', function() {
    it('Example 1', function() {
      expect(solve2(256, ''), 'to be', 'a2582a3a0e66e6e86e3812dcb672a272')
    })
    it('Example 2', function() {
      expect(
        solve2(256, 'AoC 2017'),
        'to be',
        '33efeb34ea91902bb2f59c9920caa6cd'
      )
    })
    it('Example 3', function() {
      expect(solve2(256, '1,2,3'), 'to be', '3efbe78a8d82f29979031a4aa0b16a9d')
    })
    it('Example 4', function() {
      expect(solve2(256, '1,2,4'), 'to be', '63960835bcdc130f0b66d7ff4f6a5a8e')
    })
  })
})
