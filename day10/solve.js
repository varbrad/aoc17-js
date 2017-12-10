// List = Data list, ins = List of instructions, i = index, skip = skip size
function hash(list, ins, i, skip) {
  const l = list.length
  ins.forEach(v => {
    let subArray = []
    for (let k = 0; k < v; ++k) subArray.push(list[(k + i) % l])
    subArray.reverse()
    for (let k = 0; k < v; ++k) list[(k + i) % l] = subArray[k]
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
  // Construct our list
  let list = []
  for (let i = 0; i < l; ++i) list.push(i)
  // Starting skip size & index
  let i = 0,
    skip = 0
  // Format our input & loop
  n = n
    .split(',')
    .map(Number)
    .forEach(v => {
      let subArray = []
      for (let k = 0; k < v; ++k) subArray.push(list[(k + i) % l])
      subArray.reverse()
      for (let k = 0; k < v; ++k) list[(k + i) % l] = subArray[k]
      //
      i += v + skip
      skip++
    })
  // Return
  return list[0] * list[1]
}

function solve2(l, n) {
  n = n.split('').map(v => v.charCodeAt(0))
  n.push(17, 31, 73, 47, 23)
  let list = []
  for (let i = 0; i < l; ++i) list.push(i)
  let skip = 0,
    i = 0
  for (let k = 0; k < 64; ++k) {
    ;[list, i, skip] = hash(list, n, i, skip)
  }
  let dense = []
  for (let i = 0; i < list.length; i += 16) {
    dense.push(
      list.slice(i + 1, i + 16).reduce((xor, cur) => (xor = xor ^ cur), list[i])
    )
  }
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
