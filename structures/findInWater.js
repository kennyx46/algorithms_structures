function findInWater(ar) {
  var i
  var lastMaxRight = ar[ar.length - 1]
  var lastMaxLeft = ar[0]
  lastMaxLeftIndex = 0
  lastMaxRightIndex = ar.length - 1
  var total = 0
  
  while(lastMaxLeftIndex < lastMaxRightIndex) {
    if (ar[lastMaxLeftIndex] > lastMaxLeft) {
      lastMaxLeft = ar[lastMaxLeftIndex]
    }
    if (ar[lastMaxRightIndex] > lastMaxRight) {
      lastMaxRight = ar[lastMaxRightIndex]
    }
    
    if (lastMaxLeft >= lastMaxRight) {
      total += lastMaxRight - ar[lastMaxRightIndex]
      lastMaxRightIndex--
    } else {
      total += lastMaxLeft - ar[lastMaxLeftIndex]
      lastMaxLeftIndex++
    }
  }
  
  return total
}

// var ar = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]
var ar = [2, 5, 1, 3, 100, 2, 100, 7, 7, 6]
var fw = findInWater(ar)
