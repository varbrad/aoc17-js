function solve(n) {
  n = n.split('\n').map(l => l.split('/').map(Number))

  let bestP1 = 0

  let bestP2 = 0
  let lenP2 = 0

  for (let i = 0; i < 10000000; ++i) {
    if (i % 10000 === 0) {
      console.log(i)
      console.log('Best P1:', bestP1)
      console.log('Best P2:', bestP2, 'length:', lenP2)
    }

    const [val, len] = getLink(n.slice())
    if (val > bestP1) {
      bestP1 = val
    }
    if (len > lenP2) {
      bestP2 = val
      lenP2 = len
    } else if (len === lenP2 && val > bestP2) {
      bestP2 = val
    }
  }

  return bestP1
}

function getLink(n) {
  let currentLink = 0
  let links = []
  while (true) {
    // Find values with cLink
    let possibles = n.filter(v => v[0] === currentLink || v[1] === currentLink)
    if (possibles.length === 0) break
    let link
    if (Math.random() > 0.45) {
      link = possibles[Math.floor(Math.random() * possibles.length)]
    } else {
      link = possibles.reduce((p, c) => (c[0] + c[1] > p[0] + p[1] ? c : p), [
        -1,
        -1
      ])
    }
    links.push(link)
    let i = link.indexOf(currentLink)
    currentLink = link.slice(1 - i, 2 - i)[0]
    // Remove max from 'n'
    n.splice(n.indexOf(link), 1)
  }
  return [links.reduce((p, c) => p + c[0] + c[1], 0), links.length]
}

module.exports = {
  solve
}
