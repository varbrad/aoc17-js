function solve1(n) {
  const regex = /(\d+) <-> ([\d, ]+)/
  const map = {}
  n.split('\n').forEach(l => {
    const d = regex.exec(l)
    map[d[1]] = d[2].split(', ')
  })
  // Start
  let keyToLook = ['0']
  let indexes = ['0']
  while (keyToLook.length) {
    let i = keyToLook[0]
    let data = map[i]
    data.forEach(v => {
      if (indexes.indexOf(v) === -1) {
        indexes.push(v)
        keyToLook.push(v)
      }
    })
    keyToLook.shift()
  }
  return indexes.length
}

module.exports = {
  solve1
}
