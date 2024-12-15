//linked list is a data structure with a head node which points to children nodes

class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: LinkedListNode<T> | null;

  constructor() {
    this.head = null;
  }
  //Add a new node to the end of the list
  append(data: T): void {
    const newNode = new LinkedListNode(data);
    //if the list is empty make the new node as head node
    if (!this.head) {
      this.head = newNode;
      return;
    }

    //find the last node and append to it
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let currentNode: ListNode | null = head;
  while (currentNode !== null) {
    const next: ListNode | null = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  return prev;
}
class ListNode1 {
  val: number;
  next: ListNode1 | null;

  constructor(val?: number, next?: ListNode1 | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}
function mergerTwoSortedList(
  list1: ListNode1 | null,
  list2: ListNode1 | null
): ListNode1 | null {
  // think about creating a new list by looping through the lists and adding the nodes to this new list one by one
  const dummy = new ListNode1();
  let current = dummy; //pointer
  // by the end of the loop the two lists would be null
  while (list1 !== null && list2 !== null) {
    // three conditions, either the value is <, =, > than
    if (list1.val <= list2.val) {
      current.next = list1; //set the pointer
      list1 = list1.next; //increment the list
    }
    {
      current.next = list2; //set the pointer
      list2 = list2.next; // increment the list
    }

    current = current.next;
  }
  // take care of the <= in one condition and > in else contion

  // Use a pointer to keep trak of the nod to compare and don't forget to increment the pointer to next
  // In the end one of the lists will reach the null/or end of list

  // Add the remaining part of the other list to the pointer(check for null)
  current.next = list1 !== null ? list1 : list2;

  return dummy.next;
}
