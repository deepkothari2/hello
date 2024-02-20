class Stack {
    constructor() {
        this.arr = []
    }
    push(value) {
        if (this.arr.length < 6) {
            this.arr[this.arr.length] = value
        } else {
            console.log('Stack Over Flow...')
            return
        }
    }
    pop() {
        this.arr.length = this.arr.length - 1
    }
    NextGreater() {
        for (var i = 0; i < this.arr.length; i++) {
            var next = 'Greate Element..'
            for (var j = 0; j <= this.arr.length; j++) {
                if (this.arr[i] < this.arr[j]) {
                    next = this.arr[j]
                    break
                }
            }
            console.log(this.arr[i], '->', next)

        }

    }
}

var stack = new Stack
stack.push(10)
stack.push(20)
stack.push(5)
stack.push(30)
stack.push(40)
stack.push(3)

// console.log(stack)
// stack.pop()
// console.log(stack)

stack.NextGreater()


