const Node = require('./doubly-list-node')

class DoublyLinkedList {
    constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    }

    push(value) {
        if (!this.head) {
            this.head = new Node(value)
            this.tail = this.head
            this.length++
            return this.tail.value
        }
        const node = new Node(value)
        node.prev = this.tail
        this.tail = node
        this.tail.next = null
        this.length++
        return this.tail.value
    }

    pop() {
        if (!this.head | !this.tail) {
            return
        }
        let removedNode = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        this.length--
        return removedNode.value
    }

    size() {
        return this.length
    }

    enqueue(value) {
        if (!this.head) {
            this.head = new Node(value)
            this.tail = this.head
            this.length ++
            return this.head.value
        }

        let node = new Node(value)
        node.next = this.head
        this.head.prev = node
        this.head = node
        this.length++
        return this.head.value
    }

    deque() {
        if (!this.head) {
            return
        }
        let removedNode = this.head
        this.head = this.head.next
        this.head.prev = null
        this.length--
        return removedNode.value
    }
}

module.exports = DoublyLinkedList