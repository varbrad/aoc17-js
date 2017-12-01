const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

describe('Day 1', function() {
  describe('Part 1', function() {
    it('1122', function() {
      expect(solve1('1122'), 'to be', 3)
    })
    it('1111', function() {
      expect(solve1('1111'), 'to be', 4)
    })
    it('1234', function() {
      expect(solve1('1234'), 'to be', 0)
    })
    it('91212129', function() {
      expect(solve1('91212129'), 'to be', 9)
    })
  })
  describe('Part 2', function() {
    it('1212', function() {
      expect(solve2('1212'), 'to be', 6)
    })
    it('1221', function() {
      expect(solve2('1221'), 'to be', 0)
    })
    it('123425', function() {
      expect(solve2('123425'), 'to be', 4)
    })
    it('123123', function() {
      expect(solve2('123123'), 'to be', 12)
    })
    it('12131415', function() {
      expect(solve2('12131415'), 'to be', 4)
    })
  })
})
