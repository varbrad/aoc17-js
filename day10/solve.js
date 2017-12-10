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

module.exports = {
  solve1
}
