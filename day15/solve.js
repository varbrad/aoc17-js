function* gen(start, factor) {
  let a = start
  while (1) {
    a = (a * factor) % 2147483647
    yield a & ((1 << 16) - 1)
  }
}

function solve1(a, b) {
  const genA = gen(a, 16807)
  const genB = gen(b, 48271)
  let c = 0
  for (let i = 0; i < 40000000; ++i)
    if (genA.next().value === genB.next().value) c++
  return c
}

module.exports = {
  solve1
}
