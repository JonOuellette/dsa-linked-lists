/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode
    this.tail = newNode;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }



  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) {
      return undefined;
    }
    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    if (prev) {
      prev.next = null;
      this.tail = prev;
    }
    else {
      this.head = null;
      this.tail = null;
    }

    return current.val;
  }



  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      return undefined
    }

    let currentHead = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return currentHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0) return null;

    let current = this.head;
    let count = 0

    while (current) {
      if (count === idx) {
        return current.val;
      }
      current = current.next;
      count++
    }
    return null;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0) return;

    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === idx) {
        current.val = val;
        return;
      }
      current = current.next;
      count++
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0) return; // Early exit for negative index

    let newNode = new Node(val);
    if (idx === 0) { // Insert at the beginning
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) this.tail = newNode; // If list was empty
      return;
    }

    let current = this.head;
    let count = 0;
    while (current !== null && count < idx - 1) {
      current = current.next;
      count++;
    }

    if (current === null) {
      if (this.tail) this.tail.next = newNode; // Append to the end if idx is beyond length
      this.tail = newNode; // Update tail if needed
    } else {
      newNode.next = current.next;
      current.next = newNode;
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || this.head === null) return undefined; // Early exit for negative index or empty list

    if (idx === 0) { // Remove head
      let removedValue = this.head.val;
      this.head = this.head.next;
      if (this.head === null) this.tail = null; // List became empty
      return removedValue;
    }

    let current = this.head;
    let count = 0;
    while (current !== null && count < idx - 1) {
      current = current.next;
      count++;
    }

    if (current === null || current.next === null) {
      return undefined; // Index out of bounds
    }

    let removedValue = current.next.val;
    current.next = current.next.next;
    if (current.next === null) this.tail = current; // Removed last element
    return removedValue;

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.head === null) {
      return 0
    }

    let sum = 0
    let count = 0;
    let current = this.head;

    while (current) {
      sum += current.val;
      count++;
      current = current.next
    }
    return sum / count;

  }
}

module.exports = LinkedList;
