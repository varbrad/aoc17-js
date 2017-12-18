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

class Program {
  constructor(id, n) {
    this.n = n
    this.id = id
    this.rs = { p: id }
    this.q = []
    this.i = 0
    this.sent = 0
  }

  run() {
    let locked = true
    while (1) {
      const ins = this.n[this.i]
      switch (ins[0]) {
        case 'snd':
          this.sent++
          this.link.q.push(getVal(this.rs, ins[1]))
          this.i++
          break
        case 'set':
          this.rs[ins[1]] = getVal(this.rs, ins[2])
          this.i++
          break
        case 'add':
          this.rs[ins[1]] += getVal(this.rs, ins[2])
          this.i++
          break
        case 'mul':
          this.rs[ins[1]] *= getVal(this.rs, ins[2])
          this.i++
          break
        case 'mod':
          this.rs[ins[1]] %= getVal(this.rs, ins[2])
          this.i++
          break
        case 'rcv':
          if (this.q.length > 0) {
            this.rs[ins[1]] = this.q.shift()
            this.i++
          } else {
            return locked
          }
          break
        case 'jgz':
          if (getVal(this.rs, ins[1]) > 0) {
            this.i += getVal(this.rs, ins[2])
          } else {
            this.i++
          }
          break
      }
      locked = false
    }
  }

  link(p) {
    this.link = p
  }
}

function solve2(n) {
  n = n.split('\n').map(l => l.split(' '))

  const pA = new Program(0, n)
  const pB = new Program(1, n)

  pA.link(pB)
  pB.link(pA)

  let loops = 0
  while (loops++ < 1000) {
    const aLocked = pA.run()
    const bLocked = pB.run()

    if (aLocked && bLocked) {
      break
    }
  }
  return pB.sent
}

module.exports = {
  solve1,
  solve2
}
