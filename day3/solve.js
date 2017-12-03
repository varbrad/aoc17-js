function solve1(n) {
  // Get largest odd ^2 higher than n
  let largeN = 1
  while (largeN ** 2 < n) largeN += 2
  // Get alternating vary count of 'layer'
  let vary = Math.floor(largeN / 2)
  // Starting is largeN - 1
  let start = largeN - 1
  // Starting vary value
  let doReduce = -vary
  // Difference from largeN**2 to our n
  const diff = largeN ** 2 - n
  for (let i = 0; i < diff; ++i) {
    // Loop diff times
    const sign = doReduce > 0 ? 1 : -1
    start += sign
    if (doReduce > 0) doReduce--
    else if (doReduce < 0) doReduce++

    if (doReduce === 0) doReduce = vary * sign * -1
  }
  return start
}

module.exports = {
  solve1
}
