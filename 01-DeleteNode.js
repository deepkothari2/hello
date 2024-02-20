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

    deleteItem (uvalue) {
        let current = this.head
        let prev

        while (current)
        {
            if (uvalue === current.value)
            {
                prev.next = current.next
                break
            } else
            {
                prev = current
                current = current.next
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
console.log(List);

List.deleteItem(30)
console.log(List);

