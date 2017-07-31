function blocksCount(H) {
    var i
    var blocksCount = 0
    var blocksStack = []
    
    for(i = 0; i < H.length; i++) {
        while (blocksStack.length !== 0 && H[i] < blocksStack[blocksStack.length - 1]) {
          console.log("while")
          console.log(H[i])
            blocksStack.pop()
            blocksCount++
        }
        if (blocksStack.length === 0 || H[i] > blocksStack[blocksStack.length - 1]) {
            console.log("if")
            console.log(H[i])
            blocksStack.push(H[i])
        }
    }
    
    blocksCount += blocksStack.length
    
    return blocksCount
}

var ar = [4, 4, 3, 5, 6, 8, 7, 3, 5]
var res = blocksCount(ar)
console.log(res)
