/**
 * @param {String} n The string to solve
 */
function solve1(n) {
  return n
    .split('') // Split by each character
    .map(Number) // Map from 'char' to 'int'
    .reduce(
      // Add current value to previous if current is equal to next
      (p, c, i, a) => (p += c === a[i + 1] ? c : 0),
      // Starting reduction value is the odd 0, n-1 match
      n[0] === n[n.length - 1] ? Number(n[0]) : 0
    )
}

/**
 * Just loop from 0 to n/2 length, and then double sum
 * @param {String} n The string to solve
 */
function solve2(n) {
  n = n.split('').map(Number) // Split and 'char' => 'int'
  return (
    n
      .slice(0, n.length / 2) // Slice first half of array
      .reduceRight(
        // Reduce from right to preserve array right-most indexes
        // Add to p if this value is the same as one in other array
        (p, c, i) => (p += c === n.slice(n.length / 2)[i] ? c : 0),
        0
      ) * 2 // Mult by 2 as everything maps the other way as well
  )
}

module.exports = {
  solve1,
  solve2
}
