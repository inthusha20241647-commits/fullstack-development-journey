class Queue {
  
    constructor() {
    this.items = [];
  }
  
  enqueue(newElement) {
    this.items.push(newElement);
  }
  
  dequeue() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items.shift();
  }
  
  front() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items[0];
  }
  
  back() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
  
  printQueue() {
    return this.items.join();
  }
}

let newqueue = new Queue();

newqueue.enqueue(1);
newqueue.enqueue(2);
newqueue.enqueue(3);

console.log(newqueue.printQueue());

console.log(newqueue.dequeue());
console.log(newqueue.front());
console.log(newqueue.dequeue());
console.log(newqueue.back());
console.log(newqueue.size());
console.log(newqueue.printQueue());
