/**
 * @param {String} input String of values with newlines as seperator
 */
function solve1(input) {
  // Split by newlines
  let rows = input.split('\n')
  // Insane JS below!
  return (
    rows
      .map(row =>
        row
          .trim() // Remove whitespace
          .split(/\s+/) // Split by whitespace chars
          .map(v => Number(v)) // Convert strings to ints
          .reduce(
            // Reduce to min/max array [min, max] from row [a, b, c]
            (prev, current) => [
              Math.min(prev[0], current),
              Math.max(prev[1], current)
            ],
            [Infinity, -Infinity]
          )
      )
      // Finally reduce array of [[min, max], [min, max]] to sum
      .reduce((p, c) => p + c[1] - c[0], 0)
  )
}

function solve2(input) {
  let rows = input.split('\n')
  // Convert to arr of arrays with values
  rows = rows.map(row =>
    row
      .trim()
      .split(/\s+/)
      .map(v => Number(v))
  )
  let sum = 0
  // Loop thru rows
  rows.forEach(row => {
    for (let i = 0; i < row.length - 1; ++i) {
      for (let j = i + 1; j < row.length; ++j) {
        // vals = [max, min]
        let vals = [row[i], row[j]].sort((a, b) => b - a)
        // Max / min = evenly divisible??
        if (vals[0] % vals[1] === 0) {
          // Divisible, woop!
          sum += vals[0] / vals[1]
          break
        }
      }
    }
  })

  return sum
}

module.exports = {
  solve1,
  solve2
}
