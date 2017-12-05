function solve1(n) {
  let data = n.split('\n').map(Number)
  let i = 0
  let ticks = 0
  while (1) {
    data[i]++
    i += data[i] - 1
    ticks++
    if (i < 0 || i >= data.length) break
  }
  return ticks
}

function solve2(n) {
  let data = n.split('\n').map(Number)
  let i = 0
  let ticks = 0
  while (1) {
    const v = data[i] >= 3 ? -1 : 1
    data[i] += v
    i += data[i] - v
    ticks++
    if (i < 0 || i >= data.length) break
  }
  return ticks
}

module.exports = {
  solve1,
  solve2
}
