class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insert (value) {
        const newNode = new Node(value)

        if (this.head == null)
        {
            this.head = newNode
        } else
        {
            let current = this.head
            while (current.next)
            {
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    FindMiddleNode () {
        let current = this.head
        let length = 0
        let mid = 0
        let count = 0

        while (current)
        {
            current = current.next
            length++
        }

        mid = Math.floor((length - 1) / 2)
        console.log(mid);

        current = this.head
        while (current)
        {
            if (count < mid)
            {
                current = current.next
                count++
            } else
            {
                return current.value
            }
        }

    }
}

const List = new LinkedList()
List.insert(10)
List.insert(20)
List.insert(30)
List.insert(40)
List.insert(50)
List.insert(60)

console.log(List);

console.log(List.FindMiddleNode());
