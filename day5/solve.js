function solve1(n) {
  const data = n.split('\n').map(Number)
  let i = 0
  let ticks = 0
  while (++ticks) {
    i += data[i]++
    if (i < 0 || i >= data.length) break
  }
  return ticks
}

function solve2(n) {
  const data = n.split('\n').map(Number)
  let i = 0
  let ticks = 0
  while (++ticks) {
    const v = data[i] >= 3 ? -1 : 1
    i += (data[i] += v) - v
    if (i < 0 || i >= data.length) break
  }
  return ticks
}

module.exports = {
  solve1,
  solve2
}
