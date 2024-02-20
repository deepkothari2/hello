//Brute Force
// arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// var maxSum = 0
// for (var i = 0; i < arr.length; i++) {
//     var currSum = 0
//     for (var j = i; j < arr.length; j++) {
//         currSum = currSum + arr[j]
//         if (currSum > maxSum) {
//             maxSum = currSum
//         }
//     }
// }
// console.log(maxSum, count)


//Kadanes Algorithem
function findSumOfSubArray(arr) {
    var maxSum = 0
    var currSum = 0
    for (var i = 0; i < arr.length; i++) {
        currSum = currSum + arr[i]
        if (currSum > maxSum) {
            maxSum = currSum
        }
        if (currSum < 0) {
            currSum = 0
        }
    }
    return maxSum
}
// arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]   //O(n2)
arr = [-2, -1, -3, -4, -1, -2, -1, -5, -4]   //O(n2)
console.log(findSumOfSubArray(arr))



