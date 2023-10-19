const DoublyLinkedList = require("../linked-lists/doubly-list");

test("Testing Doubly Linked List creation", () => {
  let list = new DoublyLinkedList();
  expect(list.length).toBe(0);
});

test("Testing Doubly Linked List Push()", () => {
  let list = new DoublyLinkedList();
  list.push(0);
  list.push(3);
  list.push(6);
  list.push(20);
  list.push(9);
  list.push(34);
  list.push(100);
  list.push(32);
  list.push(3111);
  expect(list.length).toBe(9);
});

test("Testing Doubly Linked List Pop()", () => {
  let list = new DoublyLinkedList();
  list.push(0);
  list.push(3);
  list.push(6);
  list.push(20);
  list.push(9);
  list.push(34);
  list.push(100);
  list.push(32);
  list.push(3111);
  list.pop();
  list.pop();
  list.pop();
  expect(list.pop()).toBe(34);
});

test("Testing Doubly Linked List Enqueue", () => {
  let list = new DoublyLinkedList();
  list.enqueue(1);
  list.enqueue(30);
  list.enqueue(21);
  list.enqueue(100);
  list.enqueue(98);
  list.enqueue(43);
  list.enqueue(23);
  list.enqueue(40);
  list.enqueue(424);
  list.enqueue(313);
  let output = [list.length, list.pop()];
  expect(String(output)).toBe(String([10, 1]));
});

test("Testing Doubly Linked List Deque", () => {
  let list = new DoublyLinkedList();
  list.enqueue(12);
  list.enqueue(13);
  list.enqueue(1);
  list.enqueue(100);
  list.enqueue(30);
  list.enqueue(43);
  list.enqueue(26);
  list.enqueue(653);
  list.enqueue(23);
  list.enqueue(56);
  list.enqueue(10423);
  expect(list.deque()).toBe(10423);
});
