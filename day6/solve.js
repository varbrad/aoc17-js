function cycleSolver(n) {
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
  return [cycles, state]
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
