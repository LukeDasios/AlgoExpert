// Time Complexity: O(n) - where n is the number of nodes in the linked list
// Space Complexity: O(1)

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let cur = linkedList;
  let prev = null;

  while (cur.next) {
    prev = cur;
    cur = cur.next;

    if (cur.value === prev.value) {
      prev.next = cur.next;
      cur.next = null;
      cur = prev;
      prev = null;
    }
  }

  return linkedList;
}
