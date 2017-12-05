function solve1(n) {
  const data = n.split('\n').map(Number)
  let i = 0,
    t = 0
  for (; ++t && !((i += data[i]++) < 0 || i >= data.length); );
  return t
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
