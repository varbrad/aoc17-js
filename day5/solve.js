function solve1(n) {
  const data = n.split('\n').map(Number)
  let i = 0,
    t = 0
  for (; ++t && !((i += data[i]++) < 0 || i >= data.length); );
  return t
}

function solve2(n) {
  const data = n.split('\n').map(Number)
  let i = 0,
    t = 0
  while (++t) {
    const n = data[i] >= 3 ? -1 : 1
    if ((i += (data[i] += n) - n) < 0 || i >= data.length) break
  }
  return t
}

module.exports = {
  solve1,
  solve2
}
