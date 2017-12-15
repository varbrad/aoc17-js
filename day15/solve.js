function* gen(start, factor, mod) {
  let a = start
  while (1) {
    a = (a * factor) % 2147483647
    if (mod && a % mod !== 0) continue
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

function solve2(a, b) {
  const genA = gen(a, 16807, 4)
  const genB = gen(b, 48271, 8)
  let c = 0
  for (let i = 0; i < 5000000; ++i)
    if (genA.next().value === genB.next().value) c++
  return c
}

module.exports = {
  solve1,
  solve2
}
