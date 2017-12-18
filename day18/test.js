const expect = require('unexpected')

const { solve1 } = require('./solve')

const data = `set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`

describe('Day 18', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1(data), 'to be', 4)
    })
  })
})
