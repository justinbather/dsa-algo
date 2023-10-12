const Node = require('./node')
//TODO: Create a Node type with a value generic of T, a left, and a right Node



class BST {

    constructor(root) {
        this.root = root;
    }

    peek() {
        return this.root.value
        
    }

    search(value) {
        if (!this.root) {
            return undefined
        }

        while(this.root) {
            if (this.root.value === value) {
                return this.root
            }

            if (this.root.value < value && this.root.right) {
                this.root = this.root.right
            } else if (this.root.value > value && this.root.left) {
                this.root = this.root.right
            } else {
                return undefined
            }
        }
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value)
        }

        
        

        let curr = this.root
        while (curr) {
            
            if (curr.value > value) {
                if(!curr.left) {
                    curr.left = new Node(value)
                    return curr.left.value
                } else {
                    curr = curr.left
                }
            } else if (curr.value < value) {
                if (!curr.right) {
                    curr.right = new Node(value)
                    return curr.right.value
                } else {
                    curr = curr.right
                }
            } 
            else {
                return
            }
        }
        
    }

    postOrderTraverse(node, arr) {
        if (node) {
            this.postOrderTraverse(node.left, arr);  
            this.postOrderTraverse(node.right, arr);
            
            arr.push(node.value)
        }
        
        return String(arr)
    }

    inOrderTraverse(node, arr) {
        
        if (node) {
            this.inOrderTraverse(node.left, arr)
            
            arr.push(node.value)
            this.inOrderTraverse(node.right, arr)
        }
        
        return String(arr)
    }

    preOrderTraverse(node, arr) {
        if (node) {
            
            arr.push(node.value)
            this.preOrderTraverse(node.left, arr)
            this.preOrderTraverse(node.right, arr)
        }
        
        return String(arr)
    }

}

module.exports = BST