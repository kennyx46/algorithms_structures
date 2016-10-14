function LinkedListNode (val) {
  this.val = val
  this.next = null
  this.prev = null
}

function DoubleLinkedList () {
  this._head = null
  this._tail = null
  this._count = 0
}

DoubleLinkedList.prototype.addFirst = function (val) {
  // adds element to the end of list (O(1))

  var node = new LinkedListNode(val)

  if (this._count === 0) {
    this._head = node
    this._tail = this._head
  } else {
    this._head.prev = node
    node.next = this._head
    this._head = node
  }

  this._count++
}

DoubleLinkedList.prototype.addLast = function (val) {
  // adds element to the end of list (O(1))

  var node = new LinkedListNode(val)

  if (this._count === 0) {
    this._head = node
  } else {
    this._tail.next = node
    node.prev = this._tail
  }

  this._tail = node

  this._count++
}

var l = new DoubleLinkedList(new LinkedListNode())
l.addFirst(10)

l.addFirst(2)
// console.log(l)
l.addFirst(155)
// l.addFirst(18)

// l.remove(111)
// l.remove(155)


var n = l._head
while (n) {
  console.log(n.val)
  n = n.next
}