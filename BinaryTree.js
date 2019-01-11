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
    } else {
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

  removeChild(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) return null;
    else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let minNode = this.findMinNode(node.right);
      node.value = minNode.value;

      node.right = this.removeNode(node.right, minNode.value);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  findByDFS(value) {
    let currentNode = this.root;
    if (this.root === null) return null;
    else {
      const array = [];
      return this.findValue(currentNode, value, array);
    }
  }

  findValue(currentNode, value, array) {
    while (currentNode) {
      if (currentNode === array[0]) return false;
      array.push(currentNode.value);
      if (currentNode.value === value) return currentNode;
      else if (value < currentNode.value) {
        currentNode = currentNode.left;
        this.findValue(currentNode, value, array);
      } else {
        currentNode = currentNode.right;
        this.findValue(currentNode, value, array);
      }
    }
  }

  // maxValue(node) {
  //   if (!node) {
  //     return 0;
  //   }
  //   if (node.right) {
  //     return maxValue(node.right);
  //   }
  //   return node.value;
  // }
}


module.exports = Tree;
