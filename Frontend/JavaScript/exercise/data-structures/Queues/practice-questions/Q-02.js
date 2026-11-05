// Reverse first k elements in a queue

function reverseElementsInQueue(queue, k) {
  let stack = [];

  for (let i = 0; i < k; i++) {
    stack.push(queue.shift());
  }
  while (stack.length > 0) {
    queue.push(stack.pop());
  }
  for (let i = 0; i < queue.length - k; i++) {
    queue.push(queue.shift());
  }
  return queue;
}
let queue = [1, 2, 3, 4, 5];
let k = 3;
console.log(reverseElementsInQueue(queue, k));
