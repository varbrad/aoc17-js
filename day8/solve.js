function solve1(n) {
  const regex = /^(\w+) (dec|inc) (-?\d+) if (\w+) (>|<|>=|<=|==|!=) (-?\d+)$/
  n = n.split('\n')
  n = n.map(line => {
    // 1 = Address, 2 = Op, 3 = Value, 4 = Test Address, 5 = Cond, 6 = Test Val
    const data = regex.exec(line)
    return {
      addr: data[1],
      mod: (data[2] === 'dec' ? -1 : 1) * Number(data[3]),
      testAddr: data[4],
      condition: data[5] + data[6]
    }
  })
  let memory = {}
  n.forEach(ins => {
    // If memory value passes condition, then modify memory
    if (eval(memory[ins.testAddr] || 0 + ins.condition))
      memory[ins.addr] = (memory[ins.addr] || 0) + ins.mod
  })
  let max = -Infinity
  for (let addr in memory) if (memory[addr] > max) max = memory[addr]
  return max
}

function solve2(n) {
  const regex = /^(\w+) (dec|inc) (-?\d+) if (\w+) (>|<|>=|<=|==|!=) (-?\d+)$/
  n = n.split('\n')
  n = n.map(line => {
    // 1 = Address, 2 = Op, 3 = Value, 4 = Test Address, 5 = Cond, 6 = Test Val
    const data = regex.exec(line)
    return {
      addr: data[1],
      mod: (data[2] === 'dec' ? -1 : 1) * Number(data[3]),
      testAddr: data[4],
      condition: data[5] + data[6]
    }
  })
  let memory = {}
  let max = -Infinity
  n.forEach(ins => {
    // First, lets get the testAddr value
    let testValue = memory[ins.testAddr]
    if (testValue === undefined) testValue = 0
    // Now check if the condition is true
    let result = eval(testValue + ins.condition)
    // Is this true, if so do the operation
    if (result) {
      memory[ins.addr] = memory[ins.addr] || 0
      memory[ins.addr] += ins.mod
      if (memory[ins.addr] > max) max = memory[ins.addr]
    }
  })
  return max
}

module.exports = {
  solve1,
  solve2
}
