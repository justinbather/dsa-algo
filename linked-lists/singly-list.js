const listNode = require('./singly-list-node');

class SinglyLinkedList {

    constructor(node) {
        this.head = node || null
        this.length = 0;
    }

    size = () => this.length

    push (value) {
        const node = new listNode(value)
        if (!this.head) {
            this.length++;
            this.head = node
            this.head.next = null
            return this.length
        }
        
        let curr = this.head
        while(curr.next) {
            curr = curr.next
        }

        curr.next = node
        
        this.length++

        return this.length
    }

    pop () {
        if (!this.head) {
            throw new Error('No head in linked list')
        }

        let curr = this.head
        while (curr.next.next) {
            curr = curr.next
        }
        let response = curr.next.value
        curr.next = null
        this.length--

        return response
    }

    sort () {

    }

    find (value) {
        if (!this.head) {
            return false
        }

        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return true
            }
            curr = curr.next
        }

        return false
    }
}

module.exports = SinglyLinkedList