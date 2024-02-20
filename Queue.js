class Queue {
    constructor() {
        this.arr = []
        this.front = -1
        this.back = -1
    }
    push(data) {
        this.back++
        this.arr[this.back] = data
        if (this.front == -1) {
            this.front++
        }

    }

    shift() {
        const item = this.arr[this.front]
        delete this.arr[this.front]
        this.front++
        return item
    }

}
var q = new Queue
q.push(10)
q.push(20)
q.push(30)
q.push(40)
console.log(q.shift())
console.log(q.shift())
console.log(q)
