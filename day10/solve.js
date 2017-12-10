// List = Data list, ins = List of instructions, i = index, skip = skip size
function hash(list, ins, i, skip) {
  const l = list.length
  ins.forEach(v => {
    ;[...Array(v).keys()] // Loop for length of this instruction
      .map((o, k) => list[(k + i) % l]) // Map to the value from the list
      .reverse() // Reverse this array
      .forEach((val, k) => (list[(k + i) % l] = val)) // Re-assign values over list
    //
    i += v + skip // Increment our index by the instruction & skip
    skip++ // Inc skip
  })
  // Return our list, index and skip values
  return [list, i, skip]
}

/**
 * @param {Number} l Length of list
 * @param {String} n Puzzle input
 */
function solve1(l, n) {
  // One round of hashing
  let [list] = hash([...Array(l).keys()], n.split(',').map(Number), 0, 0)
  return list[0] * list[1]
}

function solve2(l, n) {
  n = n.split('').map(v => v.charCodeAt(0)) // Get ASCII values from input
  n.push(17, 31, 73, 47, 23) // Add the pre-defined salt values
  let list = [...Array(l).keys()]
  let skip = 0,
    i = 0
  // 64 Rounds of hashing
  for (let k = 0; k < 64; ++k) [list, i, skip] = hash(list, n, i, skip)
  let dense = []
  // XOR the list in chunks of 16 values
  for (let i = 0; i < list.length; i += 16)
    dense.push(list.slice(i, i + 16).reduce((xor, cur) => xor ^ cur))
  return dense
    .map(num => {
      let hex = num.toString(16) // Hex representation of value
      return hex.length === 1 ? '0' + hex : hex
    })
    .join('') // Return joined hash
}

module.exports = {
  solve1,
  solve2
}
