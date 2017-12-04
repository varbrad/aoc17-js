function solve1(n) {
  let lines = n.split('\n')
  return lines
    .map(line => {
      line = line.split(' ')
      for (let i = 0; i < line.length - 1; ++i) {
        for (let j = i + 1; j < line.length; ++j) {
          if (line[i] === line[j]) return false
        }
      }
      return true
    })
    .reduce((prev, cur) => (prev += cur ? 1 : 0), 0)
}

function solve2(n) {
  let lines = n.split('\n')
  return lines
    .map(line => {
      line = line.split(' ').map(word =>
        word
          .split('')
          .sort()
          .join('')
      )
      for (let i = 0; i < line.length - 1; ++i) {
        for (let j = i + 1; j < line.length; ++j) {
          if (line[i] === line[j]) return false
        }
      }
      return true
    })
    .reduce((prev, cur) => prev + (cur ? 1 : 0), 0)
}

module.exports = {
  solve1,
  solve2
}
