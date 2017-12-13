function parseInput(n) {
  let layers = []
  const regex = /(\d+): (\d+)/
  n
    .split('\n')
    .map(l =>
      regex
        .exec(l)
        .slice(1, 3)
        .map(Number)
    )
    .forEach(v => {
      layers[v[0]] = {
        depth: v[1],
        scanner: 0,
        scanDir: 1 // 1 down, -1 up
      }
    })
  return layers
}

function step(layers) {
  layers.forEach(layer => {
    if (!layer) return
    layer.scanner += layer.scanDir
    if (layer.scanner == layer.depth) {
      // Move back, and switch dir
      layer.scanner = layer.depth - 2
      layer.scanDir = -1
    } else if (layer.scanner == -1) {
      layer.scanner = 1
      layer.scanDir = 1
    }
  })
}

function solve1(n) {
  let layers = parseInput(n)
  // Now, set our little packet
  let packet = -1 // Off-layer

  let severity = 0
  while (packet < layers.length) {
    packet++
    // Does this layer have a firewall?
    if (layers[packet]) {
      if (layers[packet].scanner === 0) {
        // COLLISION!
        severity += packet * layers[packet].depth
      }
    }

    // Move all scanners!
    step(layers)
  }

  return severity
}

function isCaught(layers) {
  // Now, set our little packet
  let packet = -1 // Off-layer

  while (packet < layers.length) {
    packet++
    // Does this layer have a firewall?
    if (layers[packet]) {
      if (layers[packet].scanner === 0) {
        // COLLISION!
        return true
      }
    }

    // Move all scanners!
    step(layers)
  }

  return false
}

function solve2(n) {
  let tryDelay = 0
  let primaryState = parseInput(n)
  while (true) {
    if (tryDelay % 100 === 0) console.log(tryDelay)
    tryDelay++
    step(primaryState)
    let caught = isCaught(JSON.parse(JSON.stringify(primaryState)))
    if (!caught) return tryDelay
  }
}

module.exports = {
  solve1,
  solve2
}
