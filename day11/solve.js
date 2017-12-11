function solve1(input) {
  let nw = 0,
    n = 0,
    ne = 0
  input.split(',').forEach(dir => {
    switch (dir) {
      case 'n':
        n++
        break
      case 'ne':
        ne++
        break
      case 'se':
        nw--
        break
      case 's':
        n--
        break
      case 'sw':
        ne--
        break
      case 'nw':
        nw++
        break
    }
  })
  return Math.abs(ne * 0.5 - nw * 0.5) + Math.abs(ne * 0.5 + nw * 0.5 + n)
}

module.exports = {
  solve1
}
