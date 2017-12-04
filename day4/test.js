const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

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
  describe('Part 2', function() {
    it('Example 1', function() {
      expect(solve2('aa bb cc dd ee\naa ba ab ck dm'), 'to be', 1)
    })
    it('Example 2', function() {
      expect(solve2('aa cc ss ww ka\nke rk kw iii ooo'), 'to be', 2)
    })
    it('Example 3', function() {
      expect(
        solve2('abcde fghij\nabcde xyz ecdab\na ab abc abd abf abj'),
        'to be',
        2
      )
    })
    it('Example 4', function() {
      expect(solve2('iiii oiii ooii oooi\noiii ioii iioi iiio'), 'to be', 1)
    })
  })
})
