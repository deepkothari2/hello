
function Partision(arr, si, ei) {
    var pivot = arr[ei]
    var i = si - 1
    for (var j = si; j < ei; j++) {
        if (arr[j] < pivot) {
            i++
            var temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    var temp = arr[i + 1]
    arr[i + 1] = arr[ei]
    arr[ei] = temp
    return i + 1
}
function QuickSort(arr, si, ei) {
    if (si < ei) {
        var part = Partision(arr, si, ei)
        QuickSort(arr, si, part - 1)
        QuickSort(arr, part + 1, ei)
    }
}


var arr = [10, 24, 25, 20, 11, 23]
console.log('Before Arr', arr)
QuickSort(arr, 0, arr.length - 1)
console.log('After Arr', arr)