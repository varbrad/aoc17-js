function solve1(n) {
  let state = n.split('\t').map(Number)
  let cycles = 0
  let map = {}
  while (map[state.join(',')] !== 1) {
    map[state.join(',')] = 1
    // Find biggest index
    let [v, i] = state.reduce((p, c, i) => (c > p[0] ? [c, i] : p), [-1, -1])
    state[i] = 0
    // From index+1, keep increasing
    while (v--) {
      state[++i >= state.length ? (i = 0) : i]++
    }
    cycles++
  }
  return cycles
}

function solve2(n) {
  let state = n.split('\t').map(Number)
  let map = {}
  while (map[state.join(',')] === undefined) {
    map[state.join(',')] = 0
    // Find biggest index
    let [v, i] = state.reduce((p, c, i) => (c > p[0] ? [c, i] : p), [-1, -1])
    state[i] = 0
    // From index+1, keep increasing
    while (v--) {
      state[++i >= state.length ? (i = 0) : i]++
    }
    //
    for (k in map) map[k]++
  }
  return map[state.join(',')]
}

module.exports = {
  solve1,
  solve2
}
