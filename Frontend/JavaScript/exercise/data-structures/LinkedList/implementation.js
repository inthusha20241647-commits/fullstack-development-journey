class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newnode = new Node(data);
    if (!this.head) {
      this.head = newnode;
      return;
    }
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newnode;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

console.log(linkedList.printList());
