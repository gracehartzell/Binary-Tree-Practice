class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  addChild(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }
    else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    // left insertion (lesser value)
    if (newNode.value < node.value) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
}


let tree = new Tree()
tree.addChild(1);
console.log(tree.addChild(1));
module.exports = Tree;
