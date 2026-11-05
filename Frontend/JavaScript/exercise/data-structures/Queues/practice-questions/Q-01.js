//program to implement stack using queue
class StackUsingQueue {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  //enqueue
  push(element) {
    this.queue1.push(element);
  }
  //dequeue
  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    const poppedElement = (this.queue1.shift()[
      // Destructuring assignment
      //ES6
      (this.queue2, this.queue1)
    ] = [this.queue1, this.queue2]);

    return poppedElement;
  }
}

let stackWithQueue = new StackUsingQueue();

stackWithQueue.push(2);
stackWithQueue.push(3);
console.log(stackWithQueue.pop());
stackWithQueue.push(4);
console.log(stackWithQueue.pop());
