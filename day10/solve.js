// List = Data list, ins = List of instructions, i = index, skip = skip size
function hash(list, ins, i, skip) {
  const l = list.length
  ins.forEach(v => {
    ;[...Array(v).keys()]
      .map((o, k) => list[(k + i) % l])
      .reverse()
      .forEach((val, k) => (list[(k + i) % l] = val))
    //
    i += v + skip
    skip++
  })
  return [list, i, skip]
}

/**
 * @param {Number} l Length of list
 * @param {String} n Puzzle input
 */
function solve1(l, n) {
  let list = [...Array(l).keys()]
  hash(list, n.split(',').map(Number), 0, 0)
  return list[0] * list[1]
}

function solve2(l, n) {
  n = n.split('').map(v => v.charCodeAt(0))
  n.push(17, 31, 73, 47, 23)
  let list = [...Array(l).keys()]
  let skip = 0,
    i = 0
  for (let k = 0; k < 64; ++k) [list, i, skip] = hash(list, n, i, skip)
  let dense = []
  for (let i = 0; i < list.length; i += 16)
    dense.push(list.slice(i, i + 16).reduce((xor, cur) => xor ^ cur))
  return dense
    .map(num => {
      let hex = num.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    })
    .join('')
}

module.exports = {
  solve1,
  solve2
}
