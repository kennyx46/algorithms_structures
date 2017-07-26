function ballCombinations (stairs, stairsCount) {
  var i
  var combCount = 0
  
  if (stairsCount < 0) return 0
  if (stairsCount === 0 || stairsCount === 1) return 1
  if (stairsCount === 2) return 2
  
  for (i = 0; i < stairs.length; i++) {
    combCount += ballCombinations(stairs, stairsCount - stairs[i])
  }
  
  return combCount
}

var bc = ballCombinations([1, 2, 3], 3)
