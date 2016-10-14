function BinaryTreeNode (val) {
    this.val = val
    this.left = null
    this.right = null
  }

  function BinaryTree () {
    this._root = null
    this._count = 0
  }

  BinaryTree.prototype.add = function (val) {
    var node = new BinaryTreeNode(val)

    if (!this._head) {
      this._head = node
    } else {
      this._addTo(this._head, node)
    }

    this._count++
  }

  BinaryTree.prototype._addTo = function (currentNode, nodeToAdd) {
    if (currentNode.val > nodeToAdd.val) {
      if (!currentNode.left) {
        currentNode.left = nodeToAdd
      } else {
        this._addTo(currentNode.left, nodeToAdd)
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = nodeToAdd
      } else {
        this._addTo(currentNode.right, nodeToAdd)
      }
    }
  }

  BinaryTree.prototype.remove = function (val) {
    var nodeData = this._findWithParent(val)
    var current = nodeData.current
    var parent = nodeData.parent
  }

  BinaryTree.prototype.findWithParent = function (val) {
    var current = this._head
    var parent = null

    while (current) {
      if (current.val > val) {
        parent = current
        current = current.left
      } else if (current.val < val) {
        parent = current
        current = current.right
      } else {
        break
      }
    }


    return { current: current, parent: parent }
  }




  var tree = new BinaryTree();
  tree.add(8);
  tree.add(4);
  tree.add(2);
  tree.add(3);
  tree.add(10);
  tree.add(6);
  tree.add(7);