const Node = require("../trees/node");
const BST = require("../trees/BST"); // Adjus../trees/BSThe path to your source file

let node1 = new Node(10);
let bst = new BST(node1);

// * Test BST.peek()
test("Create Node and BST, peek into BST", () => {
  expect(bst.peek()).toBe(node1.value);
});

// * Test BST.insert()
test("Insert into tree", () => {
  expect(bst.insert(5)).toBe(5);
});

test("Test in order traversal", () => {
  bst.insert(1);
  bst.insert(4);
  bst.insert(20);
  bst.insert(11);
  bst.insert(12);

  expect(bst.inOrderTraverse(bst.root, [])).toBe("1,4,5,10,11,12,20");
});

test("Test Iterative in order traverse", () => {
  bst.insert(1);
  bst.insert(4);
  bst.insert(20);
  bst.insert(11);
  bst.insert(12);

  expect(bst.inOrderTraverseIter(bst.root)).toBe("1,4,5,10,11,12,20");
});

// * Test Post order traverse
test("Test post order traversal", () => {
  expect(bst.postOrderTraverse(bst.root, [])).toBe("4,1,5,12,11,20,10");
});

//* Test Pre order traverse
test("Test pre order traversal", () => {
  expect(bst.preOrderTraverse(bst.root, [])).toBe("10,5,1,4,20,11,12");
});

test("Testing recursive insert", () => {
  bst.recursiveInsert(1);
  bst.recursiveInsert(4);
  bst.recursiveInsert(20);
  bst.recursiveInsert(11);
  bst.recursiveInsert(12);
  expect(bst.inOrderTraverse(bst.root, [])).toBe("1,4,5,10,11,12,20");
});
