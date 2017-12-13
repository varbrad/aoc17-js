const isCaught = delay => ([d, r]) => (delay + d) % (2 * (r - 1)) === 0
const severity = (layers, delay) =>
  layers.filter(isCaught(delay)).reduce((n, [d, r]) => n + d * r, 0)

const solve1 = n =>
  severity(
    n.split('\n').map(s =>
      /(\d+): (\d+)/
        .exec(s)
        .slice(1, 3)
        .map(Number)
    ),
    0
  )

function solve2(n) {
  const layers = n.split('\n').map(s =>
    /(\d+): (\d+)/
      .exec(s)
      .slice(1, 3)
      .map(Number)
  )

  let delay = -1
  while (layers.some(isCaught(++delay)));
  return delay
}

module.exports = {
  solve1,
  solve2
}
