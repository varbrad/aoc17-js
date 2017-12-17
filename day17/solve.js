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
  let list = [0]
  let i = 0
  for (let k = 0; k < 5000000; ++k) {
    if (k % 10000 === 0) console.log(k)
    i = (i + n) % list.length
    list.splice(i + 1, 0, k + 1)
    if (i === 0) console.log('1 =>', list[1])
    i++
  }
  return list.length
}

solve2(377)

module.exports = {
  solve1,
  solve2
}
