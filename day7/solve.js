function solve1(n) {
  // Input regex, 1 = Node ID, 2 = Weight (Unused), 4 = Comma-delimited Children
  const re = /(\w+) \((\d+)\)( -> ([\w, ]+))?/
  // Split string and map to regex results
  n = n.split('\n').map(v => re.exec(v))
  let map = {}
  // Set map with all keynames as true
  n.forEach(v => (map[v[1]] = true))
  // For each line
  n.forEach(v => {
    // If there are children, then delete those children from the map
    // as they obviously cannot be the root node (as they have a parent)
    if (v[4]) v[4].split(', ').forEach(k => delete map[k])
  })
  // map should now just have 1 node left, the root node!
  for (let a in map) return a
  // Uh-oh, something went wrong!
  return null
}

function solve2(rawN) {
  n = rawN
  // Input regex, 1 = Node ID, 2 = Weight (Unused), 4 = Comma-delimited Children
  const re = /(\w+) \((\d+)\)( -> ([\w, ]+))?/
  // Split string and map to regex results
  n = n.split('\n').map(v => re.exec(v))
  let map = {}
  // For each line
  n.forEach(
    v =>
      (map[v[1]] = {
        // Set map[id] to this node object
        id: v[1], // The node ID
        weight: Number(v[2]), // The node Weight
        children: v[4] ? v[4].split(', ') : null, // Children as ['abc', 'xyz'] or null
        sum: function() {
          // A function to return this nodes overall weight
          // Sort of recursively gets sums of childrens, which get weights
          // of it's childrens, etc. all the way down baby!
          return (
            this.weight + // This nodes weight
            (this.children
              ? this.children.reduce((p, c) => p + c.sum(), 0) // Plus any children weight
              : 0)
          )
        }
      })
  )
  // Now our data structure is setup, we can go through and map the children of each node
  // from a simple string, to the actual object ref itself.
  // ['bob'] => [[Object bob]] .etc
  for (let id in map) {
    const o = map[id]
    if (o.children) o.children = o.children.map(id => map[id])
  }
  // Root ID is the solve1 func, so get the node from the map
  let root = map[solve1(rawN)]
  // Now work backwards, which 'child' has the incorrect weight
  // getWrongChild will recursively scan for the wrong child
  let [wrongNode, targetWeight] = getWrongChild(root)
  // Get the adjustment value
  let diff = wrongNode.sum() - targetWeight
  // Return the wrongNode weight - the difference it needs
  return wrongNode.weight - diff
}

/**
 * Returns an array of [wrongNode, weightTheNodeShouldBe]
 */
function getWrongChild(node, targetWeight) {
  // If the node has no children, then this must be the wrong node!
  if (!node.children) return [node, targetWeight]
  // Create a map
  let map = {}
  // Loop thru each child
  node.children.forEach(child => {
    // Get the sum of the child node
    let sum = child.sum()
    // If we have seen this sum before, then increment
    if (map[sum]) map[sum].count++
    else
      // Else a new sum, so create map object
      map[sum] = { node: child, count: 1 }
  })
  // Min is the node we see the least often
  let min = null,
    weight = -1 // The weight the other nodes are
  for (let sum in map) {
    if (map[sum].count === 1)
      min = map[sum].node // Get the wrong node
    else weight = Number(sum) // Set the correct weight
  }
  // If !min, then unbalance in lower children, so inbalance must be this node!
  if (!min) return [node, targetWeight]
  // Return the wrongChild of the node that is wrong, and pass the weight the node should be!
  return getWrongChild(min, weight)
}

// Export the solve functions
module.exports = {
  solve1,
  solve2
}
