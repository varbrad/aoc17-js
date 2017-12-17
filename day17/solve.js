function solve1(n) {
  let list = [0]
  let i = 0
  for (let k = 0; k < 2017; ++k) {
    i = (i + n) % list.length
    list.splice(i + 1, 0, k + 1)
    i++
  }
  const index = list.indexOf(2017)
  return list[(index + 1) % list.length]
}

function solve2(n) {
  let v = -1
  let i = 0
  for (let k = 0; k < 50000000; ++k) {
    i = (i + n) % (k + 1)
    if (i === 0) {
      v = k + 1
    }
    i++
  }
  return v
}

module.exports = {
  solve1,
  solve2
}
