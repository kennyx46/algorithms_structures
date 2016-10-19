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
  // adds element to the tree at correct position (O(logN) - middle, O(N) - worst)

  var node = new BinaryTreeNode(val)

  if (!this._head) {
    this._root = node
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

BinaryTree.prototype.remove_old = function (val) {
  // removes fist node with the fiven value (O(logN) - middle, O(N) - worst)

  var nodeData = this._findWithParent(val)

  var nodeToRemove = nodeData.current
  var parent = nodeData.parent

  if (!nodeToRemove) {
    return false
  }

  if (!nodeToRemove.right) {
    if (!parent) {
      this._root = nodeToRemove.left
    } else {
      var result = parent.value > nodeToRemove.value

      if (result > 0) {
        parent.left = nodeToRemove.left
      } else if (result < 0) {
        parent.left = nodeToRemove.right
      } else if ()

      return
    }
  }

}

BinaryTree.prototype.remove = function (val) {

        var parent      = null,
            current     = this._root,
            childCount,
            replacement,
            replacementParent,
            nodes;


        nodes = this._findWithParent(value)

        current = nodes.current
        parent = nodes.parent


        //only proceed if the node was found
        if (current){

            //figure out how many children
            childCount = (current.left !== null ? 1 : 0) +
                         (current.right !== null ? 1 : 0);

            //special case: the value is at the root
            if (current === this._root){
                switch (childCount) {

                    case 0:
                        this._root = null;
                        break;

                    //one child, use one as the root
                    case 1:
                        this._root = (current.right === null ?
                                      current.left : current.right);
                        break;

                    //two children, little work to do
                    case 2:

                        //new root will be the old root's left child
                        //...maybe
                        replacement = this._root.left;

                        //find the right-most leaf node to be
                        //the real new root
                        while (replacement.right !== null){
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        //it's not the first node on the left
                        if (replacementParent !== null){

                            //remove the new root from it's
                            //previous position
                            replacementParent.right = replacement.left;

                            //give the new root all of the old
                            //root's children
                            replacement.right = this._root.right;
                            replacement.left = this._root.left;
                        } else {

                            //just assign the children
                            replacement.right = this._root.right;
                        }

                        //officially assign new root
                        this._root = replacement;

                    //no default

                }

            //non-root values
            } else {

                switch (childCount){

                    //other cases removed to save space
                     //no children, just remove it from the parent
                    case 0:
                        //if the current value is less than its
                        //parent's, null out the left pointer
                        if (current.value < parent.value){
                            parent.left = null;

                        //if the current value is greater than its
                        //parent's, null out the right pointer
                        } else {
                            parent.right = null;
                        }
                        break;

                    //one child, just reassign to parent
                    case 1:
                        //if the current value is less than its
                        //parent's, reset the left pointer
                        if (current.value < parent.value){
                            parent.left = (current.left === null ?
                                           current.right : current.left);

                        //if the current value is greater than its
                        //parent's, reset the right pointer
                        } else {
                            parent.right = (current.left === null ?
                                            current.right : current.left);
                        }
                        break;

                    //two children, a bit more complicated
                    case 2:

                        //reset pointers for new traversal
                        replacement = current.left;
                        replacementParent = current;

                        //find the right-most node
                        while(replacement.right !== null){
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }

                        replacementParent.right = replacement.left;

                        //assign children to the replacement
                        replacement.right = current.right;
                        replacement.left = current.left;

                        //place the replacement in the right spot
                        if (current.value < parent.value){
                            parent.left = replacement;
                        } else {
                            parent.right = replacement;
                        }

                    //no default

                }

            }

        }

        this._count--

    }
}

BinaryTree.prototype._findWithParent = function (val) {
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

BinaryTree.prototype.remove = function (val) {

        var parent      = null,
            current     = this._root,
            childCount,
            replacement,
            replacementParent,
            nodes;


        nodes = this._findWithParent(value)

        current = nodes.current
        parent = nodes.parent


        //only proceed if the node was found
        if (current){

            //figure out how many children
            childCount = (current.left !== null ? 1 : 0) +
                         (current.right !== null ? 1 : 0);

            //special case: the value is at the root
            // if (current === this._root){
                switch (childCount) {

                    case 0:
                      if (current === this._root) {
                        this._root = null;
                      } else {
                        if (current.value < parent.value){
                            parent.left = null;

                        //if the current value is greater than its
                        //parent's, null out the right pointer
                        } else {
                            parent.right = null;
                        }
                      }

                        break;

                    //one child, use one as the root
                    case 1:
                      if (current === this._root) {
                        this.root = current.right || current.left
                      } else {
                        if (current.value < parent.value){
                            parent.left = current.left || current.right

                        //if the current value is greater than its
                        //parent's, reset the right pointer
                        } else {
                            parent.right = current.left || current.right
                        }
                      }

                        break;

                    //two children, little work to do
                    case 2:
                        if (current === this._root) {

                          //new root will be the old root's left child
                        //...maybe
                          replacement = this._root.left;

                          //find the right-most leaf node to be
                          //the real new root
                          while (replacement.right !== null){
                              replacementParent = replacement;
                              replacement = replacement.right;
                          }

                          //it's not the first node on the left
                          if (replacementParent !== null){

                              //remove the new root from it's
                              //previous position
                              replacementParent.right = replacement.left;

                              //give the new root all of the old
                              //root's children
                              replacement.right = this._root.right;
                              replacement.left = this._root.left;
                          } else {

                              //just assign the children
                              replacement.right = this._root.right;
                          }

                          //officially assign new root
                          this._root = replacement;

                        } else {
                          replacement = current.left;
                          replacementParent = current;

                          //find the right-most node
                          while(replacement.right !== null){
                              replacementParent = replacement;
                              replacement = replacement.right;
                          }

                          replacementParent.right = replacement.left;

                          //assign children to the replacement
                          replacement.right = current.right;
                          replacement.left = current.left;

                          //place the replacement in the right spot
                          if (current.value < parent.value){
                              parent.left = replacement;
                          } else {
                              parent.right = replacement;
                          }
                        }

                    //no default

                }

            //non-root values
            // } else {

            //     switch (childCount){

            //         //other cases removed to save space
            //          //no children, just remove it from the parent
            //         case 0:
            //             //if the current value is less than its
            //             //parent's, null out the left pointer
            //             if (current.value < parent.value){
            //                 parent.left = null;

            //             //if the current value is greater than its
            //             //parent's, null out the right pointer
            //             } else {
            //                 parent.right = null;
            //             }
            //             break;

            //         //one child, just reassign to parent
            //         case 1:
            //             //if the current value is less than its
            //             //parent's, reset the left pointer
            //             if (current.value < parent.value){
            //                 parent.left = (current.left === null ?
            //                                current.right : current.left);

            //             //if the current value is greater than its
            //             //parent's, reset the right pointer
            //             } else {
            //                 parent.right = (current.left === null ?
            //                                 current.right : current.left);
            //             }
            //             break;

            //         //two children, a bit more complicated
            //         case 2:

            //             //reset pointers for new traversal
            //             replacement = current.left;
            //             replacementParent = current;

            //             //find the right-most node
            //             while(replacement.right !== null){
            //                 replacementParent = replacement;
            //                 replacement = replacement.right;
            //             }

            //             replacementParent.right = replacement.left;

            //             //assign children to the replacement
            //             replacement.right = current.right;
            //             replacement.left = current.left;

            //             //place the replacement in the right spot
            //             if (current.value < parent.value){
            //                 parent.left = replacement;
            //             } else {
            //                 parent.right = replacement;
            //             }

            //         //no default

            //     }

            }

        }

        this._count--

    }
}

BinaryTree.prototype.count = function () {
  // returns count of items (O(1))

  return this._count
}

BinaryTree.prototype.clear = function () {
  // returns count of items (O(1))

  this._root = null
  this._count = 0
}

BinaryTree.prototype.preOrderTraversal = function (cb) {
  this._preOrderTraversal(cb, this._root)
}

BinaryTree.prototype._preOrderTraversal = function (cb, node) {
  if (node) {
    cb(node)
    this._preOrderTraversal(cb, nodeToRemove.left)
    this._preOrderTraversal(cb, nodeToRemove.right)
  }
}


BinaryTree.prototype.postOrderTraversal = function (cb) {
  this._postOrderTraversal(cb, this._root)
}

BinaryTree.prototype._postOrderTraversal = function (cb, node) {
  if (node) {
    this._postOrderTraversal(cb, nodeToRemove.left)
    this._postOrderTraversal(cb, nodeToRemove.right)
    cb(node)
  }
}

BinaryTree.prototype.inOrderTraversal = function (cb) {
  this._inOrderTraversal(cb, this._root)
}

BinaryTree.prototype._inOrderTraversal = function (cb, node) {
  if (node) {
    this._inOrderTraversal(cb, nodeToRemove.left)
    cb(node)
    this._inOrderTraversal(cb, nodeToRemove.right)
  }
}



var tree = new BinaryTree();
tree.add(8);
tree.add(4);
tree.add(2);
tree.add(3);
tree.add(10);
tree.add(6);
tree.add(7);