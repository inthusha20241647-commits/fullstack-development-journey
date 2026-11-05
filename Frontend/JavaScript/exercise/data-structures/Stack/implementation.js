class Stack {
  constructor() {
    this.items = [];
  }
  // push
  push(newElement) {
    this.items.push(newElement);
  }
  // pop -LIFO
  pop() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // peek()
  peek() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  //isEmpty()
  isEmpty() {
    return this.items.length == 0;
  }

  //size()
  size() {
    return this.items.length;
  }

  //clear()
  clear() {
    this.items = [];
  }
}

const newStack=new Stack();
const anotherstack=new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);

console.log(newStack.isEmpty());//false

newStack.pop();
console.log(newStack.size()) //2

newStack.push(5);

console.log(newStack.peek());//5

newStack.clear();
console.log(newStack.isEmpty())//true

console.log(anotherstack.isEmpty())// true

