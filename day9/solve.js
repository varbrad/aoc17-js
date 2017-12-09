function getScore(arr, parentScore) {
  if (arr.length === 0) return parentScore + 1 // Empty arr []
  return arr.reduce((p, c) => p + getScore(c, parentScore + 1), parentScore + 1)
}

function solve1(n) {
  // Clean input of ! escapes, and garbage
  n = n
    .replace(/!./g, '') // Remove ! escapes
    .replace(/<.*?>/g, '') // Remove garbage
    .replace(/{/g, '[') // Turn { into [
    .replace(/}/g, ']') // Turn } into ]

  // Return recursive score
  return getScore(eval(n), 0)
}

module.exports = {
  solve1
}
