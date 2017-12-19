function solver(n) {
  n = n.split('\n').map(l => l.split(''))

  let x = n[0].findIndex(v => v !== ' ')
  let y = -1
  let dx = 0
  let dy = 1
  let letters = ''
  let loops = 0
  loop: while (++loops) {
    x += dx
    y += dy
    const symbol = n[y][x]
    switch (symbol) {
      case '|':
      case '-':
        break
      case '+':
        // Need to work out where to turn
        if (dx === 0) {
          // Check left and right
          if (n[y][x - 1] !== ' ') {
            // Going left
            dx = -1
          } else {
            dx = 1
          }
          dy = 0
        } else if (dy === 0) {
          // Check up and down
          if (n[y - 1][x] !== ' ') {
            // Going up
            dy = -1
          } else {
            dy = 1
          }
          dx = 0
        }
        break
      case ' ':
        break loop
        break
      default:
        letters += symbol
    }
  }
  return [letters, --loops]
}

function solve1(n) {
  return solver(n)[0]
}

function solve2(n) {
  return solver(n)[1]
}

module.exports = {
  solve1,
  solve2
}
