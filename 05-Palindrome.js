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

    isPalindrome () {
        let current = this.head
        let arr = []

        while (current)
        {
            arr.push(current.value)
            current = current.next
        }
        console.log(arr);

        current = this.head
        for (let i = arr.length - 1; i >= 0; i--)
        {
            if (arr[ i ] == current.value)
            {
                current = current.next
            }
            else
            {
                return false
            }
        }
        return true;
    }

}

const List = new LinkedList()

List.insert(10)
List.insert(20)
List.insert(30)
List.insert(20)
List.insert(10)

console.log(List);

console.log(List.isPalindrome());
