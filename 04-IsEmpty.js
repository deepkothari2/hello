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

    isEmpty () {
        if (this.head == null)
        {
            return true
        } else
        {
            return false
        }
    }
}

const List = new LinkedList()

// List.insert(10)

console.log(List);

console.log(List.isEmpty());
