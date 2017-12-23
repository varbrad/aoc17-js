function solve1(n) {
  const regex = /(\w+) ([\d|\w]+) (-?[\d|\w]+)/
  n = n.split('\n').map(l => regex.exec(l).slice(1, 4))

  let i = 0
  let regs = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0
  }

  const toVal = a => {
    const int = parseInt(a)
    if (isNaN(int)) return regs[a]
    return int
  }

  let loops = 0

  while (i < n.length) {
    switch (n[i][0]) {
      case 'set':
        regs[n[i][1]] = toVal(n[i][2])
        i++
        break
      case 'sub':
        regs[n[i][1]] -= toVal(n[i][2])
        i++
        break
      case 'mul':
        regs[n[i][1]] *= toVal(n[i][2])
        loops++
        i++
        break
      case 'jnz':
        if (toVal(n[i][1]) !== 0) {
          i += toVal(n[i][2])
        } else {
          i++
        }
        break
    }
  }

  return loops
}

function solve2(n) {
  let r = {
    a: 1,
    b: 67,
    c: 67,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0
  }
  r['b'] = r['b'] * 100 + 100000
  r['c'] = r['b'] + 17000
  do {
    r['f'] = 1
    r['d'] = 2
    r['e'] = 2
    for (let d = r['d']; d * d < r['b']; ++d) {
      if (r['b'] % d === 0) {
        r['f'] = 0
        break
      }
    }
    if (r['f'] === 0) r['h']++
    r['g'] = r['b'] - r['c']
    r['b'] += 17
  } while (r['g'] !== 0)

  return r['h']
}

module.exports = {
  solve1,
  solve2
}
