function LinkedListNode (val) {
  this.val = val
  this.next = null
}

function LinkedList () {
  this._head = null
  this._tail = null
  this._count = 0
}

LinkedList.prototype.add = function (val) {
  // adds element to the end of list (O(1))

  var node = new LinkedListNode(val)

  if (this._head === null) {
    this._head = node
    this._tail = node
  } else {
    this._tail.next = node
    this._tail = node
  }

  this._count++
}

LinkedList.prototype.remove = function (val) {
  // remove element from the list (O(n))

  var current = this._head
  var previous = null

  while (current) {
    if (current.val === val) {

      // if (current === this._head) {
      //  this._head = current.next
      // } else if (current === this._tail){
      //  this._tail = previous
      //  if (previous) {
      //    previous.next = null
      //  }
      // } else {
      //  previous.next = current.next
      // }

      if (previous) {
        previous.next = current.next
        if (current === this._tail) {
          this._tail = previous
        }
      } else {
        this._head = current.next
        if (!this._head) {
          this._tail = null
        }
      }

      this._count--
      return true
    }
    previous = current
    current = current.next
  }

  return false
}

LinkedList.prototype.contains = function (val) {
  var current = this._head

  while (current) {
    if (current.val === val) {
      return true
    }
    current = current.next
  }
  return false
}

LinkedList.prototype.clear = function () {
  this._head = null
  this._tail = null
  this._count = 0
}


var l = new LinkedList(new LinkedListNode())
l.add(10)
l.add(2)
l.add(155)
l.add(18)

l.remove(111)
l.remove(155)


var n = l._head
while (n) {
  console.log(n.val)
  n = n.next
}