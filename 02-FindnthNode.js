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

    FindnthNode (uvalue) {
        let current = this.head
        let index = 0

        while (current)
        {
            if (uvalue == current.value)
            {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }
}

const List = new LinkedList()
List.insert(10)
List.insert(20)
List.insert(30)
List.insert(40)
List.insert(50)
console.log(List);

console.log(List.FindnthNode(30));

console.log(List);

