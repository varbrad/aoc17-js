/**
 * @param {String} n The string to solve
 */
function solve1(n) {
  let sum = 0
  for (let i = 0; i < n.length - 1; ++i) {
    if (n[i] === n[i + 1]) sum += Number(n[i])
  }
  if (n[0] === n[n.length - 1]) sum += Number(n[0])
  return sum
}

/**
 * Just loop from 0 to n/2 length, and then double sum
 * @param {String} n The string to solve
 */
function solve2(n) {
  let sum = 0
  let v = n.length / 2 // Always an even length so / 2 is fine
  for (let i = 0; i < v; ++i) {
    if (n[i] === n[i + v]) sum += Number(n[i])
  }
  return sum * 2
}

module.exports = {
  solve1,
  solve2
}
