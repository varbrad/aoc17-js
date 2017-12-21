function parseInput(n) {
  const regex = /([.#/]+) => ([.#/]+)/
  return n.split('\n').map(l => {
    const rx = regex
      .exec(l)
      .slice(1, 3)
      .map(str => {
        return str.split('/').map(row => {
          return row.split('').map(val => (val === '.' ? 0 : 1))
        })
      })
    return {
      in: rx[0],
      out: rx[1],
      inSize: rx[0].length,
      outSize: rx[1].length
    }
  })
}

function rotate(a) {
  // reverse the rows
  a = a.reverse()
  // swap the symmetric elements
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = a[i][j]
      a[i][j] = a[j][i]
      a[j][i] = temp
    }
  }
}

function equal(a, b) {
  for (let y = 0; y < a.length; ++y) {
    for (let x = 0; x < a[y].length; ++x) {
      if (a[y][x] !== b[y][x]) return false
    }
  }
  return true
}

function doMatch(a, b) {
  // Rotate initial
  for (let i = 0; i < 4; ++i) {
    if (equal(a, b)) return true
    rotate(a)
  }
  // Flip left facing
  a.reverse()
  // Rotate left-racing (up-down flip)
  for (let i = 0; i < 4; ++i) {
    if (equal(a, b)) return true
    rotate(a)
  }
  // Flip down-facing
  a.reverse()
  // Rotate down-facing (left-right flip)
  for (let i = 0; i < 4; ++i) {
    if (equal(a, b)) return true
    rotate(a)
  }

  return false
}

function getMatch(rules, piece) {
  const pieceSize = piece.length
  for (let i = 0; i < rules.length; ++i) {
    let rule = rules[i]
    if (rule.inSize !== pieceSize) continue
    if (doMatch(rule.in, piece)) {
      return rule.out
    }
  }

  // Return some random thing
  if (piece.length === 3)
    return [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]
  else return [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
}

function solve1(start, n, LOOP_TOTAL) {
  const rules = parseInput(n)
  let current = start
    .split('\n')
    .map(v => v.split('').map(v2 => (v2 === '.' ? 0 : 1)))

  let loops = 0
  while (++loops < LOOP_TOTAL + 1) {
    // Get current 'size'
    const size = current.length
    const div = size % 2 === 0 ? 2 : 3
    const chunks = size / div
    const newPattern = []
    const newSize = size + chunks
    for (let y = 0; y < newSize; ++y) {
      newPattern[y] = []
      for (let x = 0; x < newSize; ++x) newPattern[y][x] = 0
    }
    for (let y = 0; y < chunks; ++y) {
      const ySlice = current.slice(div * y, div * (y + 1))
      for (let x = 0; x < chunks; ++x) {
        // Gets the slice to match
        const slice = ySlice.map(xSlice => xSlice.slice(div * x, div * (x + 1)))
        const pattern = getMatch(rules, slice)

        const yP = (div + 1) * y
        const xP = (div + 1) * x

        for (let pY = 0; pY < pattern.length; ++pY) {
          for (let pX = 0; pX < pattern[pY].length; ++pX) {
            const val = pattern[pY][pX]
            newPattern[yP + pY][xP + pX] = val
          }
        }
      }
    }
    current = newPattern
  }

  let r = current.map(l => l.reduce((c, v) => c + v)).reduce((c, v) => c + v)

  return r
}

const start = `.#.
..#
###`

const rules = `../.# => ##./#../...
.#./..#/### => #..#/..../..../#..#`

solve1(start, rules)

module.exports = {
  solve1
}
