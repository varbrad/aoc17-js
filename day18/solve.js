function getVal(rs, v) {
  const num = parseInt(v)
  return isNaN(num) ? rs[v] : num
}

function solve1(n) {
  const rs = {}
  let sound = -1
  let i = 0
  n = n.split('\n').map(l => l.split(' '))

  loop: while (1) {
    const ins = n[i]
    switch (ins[0]) {
      case 'snd':
        sound = getVal(rs, ins[1])
        i++
        break
      case 'set':
        rs[ins[1]] = getVal(rs, ins[2])
        i++
        break
      case 'add':
        rs[ins[1]] += getVal(rs, ins[2])
        i++
        break
      case 'mul':
        rs[ins[1]] *= getVal(rs, ins[2])
        i++
        break
      case 'mod':
        rs[ins[1]] %= getVal(rs, ins[2])
        i++
        break
      case 'rcv':
        if (getVal(rs, ins[1]) !== 0) {
          break loop
        }
        i++
        break
      case 'jgz':
        if (getVal(rs, ins[1]) > 0) {
          i += getVal(rs, ins[2])
        } else {
          i++
        }
        break
    }
  }

  return sound
}

module.exports = {
  solve1
}
