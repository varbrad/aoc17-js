const expect = require('unexpected')

const { solve1 } = require('./solve')

describe('Day 4', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1('aa bb cc dd ee\naa bb cc dd aa'), 'to be', 1)
    })
    it('Example 2', function() {
      expect(solve1('aa bb cc dd aaa\nva ca da ff knvzb'), 'to be', 2)
    })
    it('Example 3', function() {
      expect(
        solve1('aa bb cc\nkv dn wja kva dn\nka dk eu qhw bc dk'),
        'to be',
        1
      )
    })
  })
})
