function solve1() {
  let state = 'A'
  let loops = 12459852
  let cursor = 0
  let data = {}

  const states = {
    A: [
      {
        write: 1,
        move: 1,
        state: 'B'
      },
      {
        write: 1,
        move: -1,
        state: 'E'
      }
    ],
    B: [
      {
        write: 1,
        move: 1,
        state: 'C'
      },
      {
        write: 1,
        move: 1,
        state: 'F'
      }
    ],
    C: [
      {
        write: 1,
        move: -1,
        state: 'D'
      },
      {
        write: 0,
        move: 1,
        state: 'B'
      }
    ],
    D: [
      {
        write: 1,
        move: 1,
        state: 'E'
      },
      {
        write: 0,
        move: -1,
        state: 'C'
      }
    ],
    E: [
      {
        write: 1,
        move: -1,
        state: 'A'
      },
      {
        write: 0,
        move: 1,
        state: 'D'
      }
    ],
    F: [
      {
        write: 1,
        move: 1,
        state: 'A'
      },
      {
        write: 1,
        move: 1,
        state: 'C'
      }
    ]
  }

  for (let i = 0; i < loops; ++i) {
    let curVal = data[cursor]
    if (curVal === undefined) curVal = 0
    let ins = states[state][curVal]

    data[cursor] = ins.write
    cursor += ins.move
    state = ins.state
  }

  let sum = 0
  for (let v in data) {
    sum += data[v]
  }

  return sum
}

console.log(solve1())

module.exports = {
  solve1
}
