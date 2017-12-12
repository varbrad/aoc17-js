function getMap(n) {
  const regex = /(\d+) <-> ([\d, ]+)/
  const map = {}
  n.split('\n').forEach(l => {
    const d = regex.exec(l)
    map[d[1]] = d[2].split(', ')
  })
  return map
}

function solve1(n) {
  const map = getMap(n)
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

function solve2(n) {
  const map = getMap(n)
  let groups = 0
  const notDoneYet = []
  for (let key in map) notDoneYet.push(key)
  while (notDoneYet.length) {
    let keyToLook = [notDoneYet[0]]
    let indexes = [notDoneYet[0]]
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
    groups++
    indexes.forEach(v => notDoneYet.splice(notDoneYet.indexOf(v), 1))
  }
  return groups
}

module.exports = {
  solve1,
  solve2
}
