function solve1(n, loops) {
  let map = {}

  n = n.split('\n').map(l => l.split('').map(v => (v === '.' ? 0 : 1)))
  const ylen = n.length
  for (let y = 0; y < ylen; ++y) {
    const xlen = n[y].length
    for (let x = 0; x < xlen; ++x) {
      map[x - Math.floor(xlen / 2) + ',' + (y - Math.floor(ylen / 2))] = n[y][x]
    }
  }

  let x = 0
  let y = 0
  let dir = 0 // 0 = up, 1 = right, 2 = down, 3 = left
  let infected = 0
  while (loops--) {
    // If current node is infected, turn right, else turn left
    if (map[x + ',' + y] === 1) dir = (dir + 1) % 4
    else dir = dir - 1 < 0 ? 3 : dir - 1
    // If current node is infected, it becomes clean, otherwise infected
    if (map[x + ',' + y] === 1) map[x + ',' + y] = 0
    else {
      map[x + ',' + y] = 1
      infected++
    }
    // Move in its direction
    x += dir === 1 ? 1 : dir === 3 ? -1 : 0
    y += dir === 2 ? 1 : dir === 0 ? -1 : 0
  }
  return infected
}

function solve2(n, loops) {
  let map = {}

  const CLEAN = 0
  const WEAKENED = 1
  const INFECTED = 2
  const FLAGGED = 3

  n = n
    .split('\n')
    .map(l => l.split('').map(v => (v === '.' ? CLEAN : INFECTED)))
  const ylen = n.length
  for (let y = 0; y < ylen; ++y) {
    const xlen = n[y].length
    for (let x = 0; x < xlen; ++x) {
      map[x - Math.floor(xlen / 2) + ',' + (y - Math.floor(ylen / 2))] = n[y][x]
    }
  }

  let x = 0
  let y = 0
  let dir = 0 // 0 = up, 1 = right, 2 = down, 3 = left
  let infected = 0
  while (loops--) {
    const status = map[x + ',' + y]
    switch (status) {
      case undefined:
      case CLEAN:
        dir = dir - 1 < 0 ? 3 : dir - 1
        break
      case INFECTED:
        dir = (dir + 1) % 4
        break
      case FLAGGED:
        dir = (dir + 2) % 4
        break
    }

    if (!map[x + ',' + y]) map[x + ',' + y] = 1
    else map[x + ',' + y] = (map[x + ',' + y] + 1) % 4

    if (map[x + ',' + y] === INFECTED) infected++

    // Move in its direction
    x += dir === 1 ? 1 : dir === 3 ? -1 : 0
    y += dir === 2 ? 1 : dir === 0 ? -1 : 0
  }
  return infected
}

module.exports = {
  solve1,
  solve2
}
