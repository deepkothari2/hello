// for (var i = 0; i < 10; i++) {
//     console.log(i + 1)
// }


function show(num) {
    if (num > 0) {
        show(num - 1)   //0

    }
    console.log(num)
}
show(5)