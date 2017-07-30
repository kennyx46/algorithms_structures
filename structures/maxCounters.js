function solution(N, A) {
    var i, j
    var counters = Array(N).fill(0)
    var maxCounter = 0
    var maxNumber = 0
    
    for (i = 0; i < A.length; i++) {
        if (A[i] === N + 1) {
          maxCounter = maxNumber
        } else {
            if (counters[A[i] - 1] < maxCounter) {
                counters[A[i] - 1] = maxCounter + 1
            } else {
                counters[A[i] - 1]++
            }
            if (counters[A[i] - 1] > maxNumber) {
                maxNumber = counters[A[i] - 1]
            }
        }
    }
    
    for (i = 0; i < N; i++) {
        if (counters[i] < maxCounter) counters[i] = maxCounter
    }
    
    return counters
}

var res = solution(5, [3, 4, 4, 6, 1, 4, 4])
// var res = solution(5, [6, 6, 6, 6, 6, 6])
console.log(res)
// [3, 2, 2, 4, 2]


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    var downstream = []
    var i
    var fishCount = A.length
    var lastFishIndex
    
    for (i = 0; i < A.length; i++) {
        if (B[i] === 1) {
            downstream.push(i)
        } else if (downstream.length > 0){
            while(downstream.length > 0 && (lastFishIndex = downstream.pop()) >= 0) {
                if (A[lastFishIndex] > A[i]) {
                    fishCount--
                    downstream.push(lastFishIndex)
                    break
                } else {
                    fishCount--
                }
            }
        }
    }
    
    return fishCount
}
