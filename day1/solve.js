/**
 * @param {String} n The string to solve
 */
function solve1(n) {
  return n
    .split('')
    .map(Number)
    .reduce(
      (p, c, i, a) => (p += c === a[i + 1] ? c : 0),
      n[0] === n[n.length - 1] ? Number(n[0]) : 0
    )
}

/**
 * Just loop from 0 to n/2 length, and then double sum
 * @param {String} n The string to solve
 */
function solve2(n) {
  n = n.split('').map(Number)
  return (
    n
      .slice(0, n.length / 2)
      .reduceRight(
        (p, c, i) => (p += c === n.slice(n.length / 2)[i] ? c : 0),
        0
      ) * 2
  )
}

module.exports = {
  solve1,
  solve2
}
