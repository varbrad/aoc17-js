function solve1(n) {
  // Get largest odd ^2 higher than n
  let largeN = 1
  while (largeN ** 2 < n) largeN += 2
  // Get alternating vary count of 'layer'
  let vary = Math.floor(largeN / 2)
  // Starting is largeN - 1
  let start = largeN - 1
  // Starting vary value
  let doReduce = -vary
  // Difference from largeN**2 to our n
  const diff = largeN ** 2 - n
  for (let i = 0; i < diff; ++i) {
    // Loop diff times
    const sign = doReduce > 0 ? 1 : -1
    start += sign
    if (doReduce > 0) doReduce--
    else if (doReduce < 0) doReduce++

    if (doReduce === 0) doReduce = vary * sign * -1
  }
  return start
}

/**
 * Literally just build the spiral and count as we go. 😂
 */
function solve2(n) {
  const map = {
    '0x0': 1
  }
  let dir = 'r'
  let moves = 1
  let movesToGo = 1
  let pos = [0, 0]
  let currentVal = 1

  const getNeighbours = () => {
    let sum = 0
    for (let y = 0; y < 3; ++y) {
      for (let x = 0; x < 3; ++x) {
        if (x === 1 && y === 1) continue
        const ax = pos[0] + x - 1
        const ay = pos[1] + y - 1
        sum += map[ax + 'x' + ay] || 0
      }
    }
    return sum
  }

  while (currentVal < n) {
    movesToGo--
    switch (dir) {
      case 'r':
        pos[0]++
        break
      case 'l':
        pos[0]--
        break
      case 'u':
        pos[1]--
        break
      case 'd':
        pos[1]++
        break
    }
    currentVal = getNeighbours()
    map[pos[0] + 'x' + pos[1]] = currentVal

    if (movesToGo === 0) {
      switch (dir) {
        case 'r':
          dir = 'u'
          break
        case 'u':
          dir = 'l'
          moves++
          break
        case 'l':
          dir = 'd'
          break
        case 'd':
          dir = 'r'
          moves++
          break
      }
      movesToGo = moves
    }
  }
  return currentVal
}

module.exports = {
  solve1,
  solve2
}
