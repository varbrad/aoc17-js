function solve1(n) {
  const re = /(\w+) \((\d+)\)( -> ([\w, ]+))?/
  n = n.split('\n').map(v => re.exec(v))
  let map = {}
  n.forEach(v => (map[v[1]] = true))
  n.forEach(v => {
    if (v[4] === undefined) return
    v[4].split(', ').forEach(k => delete map[k])
  })
  for (let a in map) return a
  return null
}

module.exports = {
  solve1
}
