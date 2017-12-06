function cycleSolver(e) {
  let data = e.split('\t').map(Number),
    cyc = 0,
    map = {}
  for (; 1 !== map[data.join(',')]; ) {
    map[data.join(',')] = 1
    // Find biggest index and value
    let [i, v] = data.reduce((e, r, t) => (r > e[0] ? [r, t] : e), [-1, -1])
    // Distrib values
    for (data[v] = 0; i--; ) data[++v >= data.length ? (v = 0) : v]++
    cyc++
  }
  return [cyc, data]
}

function solve1(n) {
  return cycleSolver(n)[0]
}

function solve2(n) {
  return cycleSolver(cycleSolver(n)[1].join('\t'))[0]
}

module.exports = {
  solve1,
  solve2
}
