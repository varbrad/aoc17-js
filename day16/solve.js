function solve1(str, n) {
  const regex = /(s|x|p)([\d|\w]+)(?:\/(\d+|\w))?/

  let i = 0

  str = str.split('')

  n
    .split(',')
    .map(l => l.match(regex).slice(1, 4))
    .forEach(v => {
      let a, b, t
      switch (v[0]) {
        case 's':
          a = Number(v[1]) % str.length
          str = [].concat(
            str.slice(str.length - a),
            str.slice(0, str.length - a)
          )
          break
        case 'x':
          a = Number(v[1])
          b = Number(v[2])
          t = str[a]
          str[a] = str[b]
          str[b] = t
          break
        case 'p':
          a = str.indexOf(v[1])
          b = str.indexOf(v[2])
          t = str[a]
          str[a] = str[b]
          str[b] = t
          break
      }
    })

  return str.join('')
}

// Definitely not the best way to do this!
function solve2(str, n) {
  let map = {}
  for (let i = 0; i < 1000000000; ++i) {
    if (map[str]) {
      str = map[str]
    } else {
      // Calc
      const v = solve1(str, n)
      map[str] = v
      str = v
    }
  }
  return str
}

module.exports = {
  solve1,
  solve2
}
