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

function solve2(n) {
  const re = /(\w+) \((\d+)\)( -> ([\w, ]+))?/
  n = n.split('\n').map(v => re.exec(v))
  let map = {}
  n.forEach(
    v =>
      (map[v[1]] = {
        id: v[1],
        weight: Number(v[2]),
        children: v[4] ? v[4].split(', ') : null,
        sum: function() {
          return (
            this.weight +
            (this.children !== null
              ? this.children.reduce((p, c) => p + c.sum(), 0)
              : 0)
          )
        }
      })
  )
  for (let id in map) {
    const o = map[id]
    if (o.children) {
      o.children = o.children.map(id => map[id])
    }
  }
  let root = null
  // Get the root node
  for (let id in map)
    root === null || map[id].sum() > root.sum() ? (root = map[id]) : null
  // Now work backwards, which 'child' has the incorrect weight
  let [wrongNode, targetWeight] = getWrongChild(root)
  let diff = wrongNode.sum() - targetWeight
  wrongNode.weight -= diff
  return wrongNode.weight
}

function getWrongChild(node, targetWeight) {
  if (node.children === null) return [node, targetWeight]
  let map = {}
  node.children.forEach(child => {
    let sum = child.sum()
    if (map[sum]) map[sum].count++
    else map[sum] = { node: child, count: 1 }
  })
  let min = null,
    weight = -1
  for (let sum in map) {
    if (map[sum].count === 1) min = map[sum].node
    else weight = Number(sum)
  }
  // No unbalance in lower children, so inbalance must be this node!
  if (min === null) return [node, targetWeight]
  return getWrongChild(min, weight)
}

module.exports = {
  solve1,
  solve2
}
