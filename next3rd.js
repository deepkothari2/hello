const arr = [11, 6, 12, 9, 8, 1, 2, 5, 20]

var stak = []
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }

    }
    stak.push(arr[i])
}


console.log(stak)
for (var i = 0; i < stak.length; i++) {
    console.log(stak[i], '=>', stak[i + 3] ? stak[i + 3] : 'Not Found...')
}

