function solve1(input) {
  let c = input.split(',').reduce(
    (c, dir) => {
      if (dir === 'nw') c[0]++
      else if (dir === 'n') c[1]++
      else if (dir === 'ne') c[2]++
      else if (dir === 'se') c[0]--
      else if (dir === 's') c[1]--
      else if (dir === 'sw') c[2]--
      return c
    },
    [0, 0, 0]
  )
  return (
    Math.abs(c[2] * 0.5 - c[0] * 0.5) + Math.abs(c[2] * 0.5 + c[0] * 0.5 + c[1])
  )
}

function solve2(input) {
  let maxDist = 0
  input.split(',').reduce(
    (c, dir) => {
      if (dir === 'nw') c[0]++
      else if (dir === 'n') c[1]++
      else if (dir === 'ne') c[2]++
      else if (dir === 'se') c[0]--
      else if (dir === 's') c[1]--
      else if (dir === 'sw') c[2]--
      //
      const d =
        Math.abs(c[2] * 0.5 - c[0] * 0.5) +
        Math.abs(c[2] * 0.5 + c[0] * 0.5 + c[1])
      if (d > maxDist) maxDist = d
      //
      return c
    },
    [0, 0, 0]
  )
  return maxDist
}

module.exports = {
  solve1,
  solve2
}
