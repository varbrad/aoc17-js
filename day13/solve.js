const isCaught = delay => ([a, b]) => (delay + a) % (2 * (b - 1)) === 0

const solve1 = n =>
  ((layers, delay) =>
    layers.filter(isCaught(delay)).reduce((n, [a, b]) => n + a * b, 0))(
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
