const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

let testData = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`

describe('Day 7', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1(testData), 'to be', 'tknk')
    })
  })
  describe('Part 2', function() {
    it('Example 1', function() {
      expect(solve2(testData), 'to be', 60)
    })
  })
})
