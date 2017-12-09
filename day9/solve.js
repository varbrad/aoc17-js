function solve1(n) {
  // Clean input of ! escapes, and garbage
  n = n
    .replace(/!./g, '') // Remove ! escapes
    .replace(/<.*?>/g, '') // Remove garbage
    .replace(/{/g, '[') // Turn { into [
    .replace(/}/g, ']') // Turn } into ]

  // Return recursive score
  const score = (a, p) =>
    a.length ? a.reduce((ac, c) => ac + score(c, p + 1), p + 1) : p + 1
  return score(eval(n), 0)
}

function solve2(n) {
  return n
    .replace(/!./g, '')
    .match(/<.*?>/g)
    .reduce((c, v) => c + v.length - 2, 0)
}

module.exports = {
  solve1,
  solve2
}
