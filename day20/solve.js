function solve1(n) {
  const regex = /p=<(-?\d+),(-?\d+),(-?\d+)>, v=<(-?\d+),(-?\d+),(-?\d+)>, a=<(-?\d+),(-?\d+),(-?\d+)>/
  n = n.split('\n').map((l, i) => {
    const data = regex
      .exec(l)
      .slice(1, 10)
      .map(Number)

    return {
      id: i,
      p: data.slice(0, 3),
      v: data.slice(3, 6),
      a: data.slice(6, 9)
    }
  })

  let loops = 0
  while (++loops < 10000) {
    n.forEach(p => {
      for (let i = 0; i < 3; ++i) {
        p.v[i] += p.a[i]
        p.p[i] += p.v[i]
      }
    })
  }

  // Find nearest point
  let cP,
    dist = Infinity
  n.forEach(p => {
    const d = Math.abs(p.p[0]) + Math.abs(p.p[1]) + Math.abs(p.p[2])
    if (d < dist) {
      cP = p
      dist = d
    }
  })

  return cP.id
}

function solve2(n) {
  const regex = /p=<(-?\d+),(-?\d+),(-?\d+)>, v=<(-?\d+),(-?\d+),(-?\d+)>, a=<(-?\d+),(-?\d+),(-?\d+)>/
  n = n.split('\n').map((l, i) => {
    const data = regex
      .exec(l)
      .slice(1, 10)
      .map(Number)

    return {
      id: i,
      p: data.slice(0, 3),
      v: data.slice(3, 6),
      a: data.slice(6, 9)
    }
  })

  let loops = 0
  while (++loops < 50) {
    n.forEach(p => {
      for (let i = 0; i < 3; ++i) {
        p.v[i] += p.a[i]
        p.p[i] += p.v[i]
      }
    })
    let toRemove = {}
    for (let i = 0; i < n.length - 1; ++i) {
      const p1 = n[i]
      for (let j = i + 1; j < n.length; ++j) {
        const p2 = n[j]
        if (p1.p[0] === p2.p[0] && p1.p[1] === p2.p[1] && p1.p[2] === p2.p[2]) {
          toRemove[p1.id] = true
          toRemove[p2.id] = true
        }
      }
    }
    for (let id in toRemove) {
      n.splice(n.findIndex(p => p.id === id), 1)
    }
  }

  return n.length
}

module.exports = {
  solve1,
  solve2
}
