// function to check whether a string contains valid matching parentheses () using a stack.

let str = "()()";

function isValid(str) {
  let stack = [];

  let matchingBrackets = {
    ")": "(",
  };
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "(") {
      stack.push(char);
    }
    if (char === ')') {
      if (stack.length === 0 || stack[stack.length - 1] !== matchingBrackets[char] ){
         return false;  
        }
        stack.pop();
    }
  }
  return stack.length===0;
}
console.log(isValid(str));
