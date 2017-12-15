const day10 = require('../day10/solve')

function solve1(n) {
  let filled = 0
  for (let i = 0; i < 128; ++i) {
    const hash = day10.solve2(256, n + '-' + i)
    for (let k = 0; k < hash.length; k += 2) {
      // For every byte
      let bin = parseInt(hash.slice(k, k + 2), 16).toString(2)
      // Get count of 1's
      filled += bin
        .split('')
        .reduce((acc, cur) => (cur === '1' ? acc + 1 : acc), 0)
    }
  }
  return filled
}

function solve2(n) {
  let map = []
  for (let i = 0; i < 128; ++i) {
    const hash = day10.solve2(256, n + '-' + i)
    map[i] = []
    let data = ''
    for (let k = 0; k < hash.length; k += 2) {
      // For every byte
      let bin = parseInt(hash.slice(k, k + 2), 16).toString(2)
      while (bin.length < 8) bin = '0' + bin
      // Get count of 1's
      data += bin
    }
    map[i] = data.split('').map(v => (v === '1' ? 1 : 0))
  }
  //
  let groups = 0
  for (let y = 0; y < map.length; ++y) {
    for (let x = 0; x < map[y].length; ++x) {
      if (map[y][x] === 0) continue
      let toCheck = [[x, y]]
      while (toCheck.length > 0) {
        let [cX, cY] = toCheck.pop()
        if (map[cY][cX] === 0) continue
        //
        map[cY][cX] = 0
        if (map[cY] && map[cY][cX - 1]) toCheck.push([cX - 1, cY])
        if (map[cY] && map[cY][cX + 1]) toCheck.push([cX + 1, cY])
        if (map[cY - 1] && map[cY - 1][cX]) toCheck.push([cX, cY - 1])
        if (map[cY + 1] && map[cY + 1][cX]) toCheck.push([cX, cY + 1])
      }
      groups++
    }
  }
  return groups
}

module.exports = {
  solve1,
  solve2
}
