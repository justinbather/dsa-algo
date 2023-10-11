
const linkedList = require('../linked-lists/singly-list')
const listNode = require('../linked-lists/singly-list-node')


let node = new listNode(10)
let list = new linkedList()

test('Push node into singly linked list', () => {
    expect(list.push(10)).toBe(1)
})

test('Return Singly linked list length', () => {
    expect(list.size()).toBe(1)
})

test('Remove last item from list', () => {
    list.push(2)
    list.push(5)
    list.push(20)
   
    list.push(8)
    
    expect(list.pop()).toBe(8)
})

test('Find item in list' , () => {
    let arr = [1, 4, 10, 13, 20, 8, 2]
    let output = []
    for (i = 0; i< arr.length; i++) {
        output.push(list.find(arr[i]))
    }

    expect(String(output)).toBe('false,false,true,false,true,false,true')
})