// Check whether a string contains valid matching brackets using a stack.

let str = "{[()]}";

function isValid(str) {
    let stack = [];
    
    let matchingBrackets = {
    "}":"{" ,
    ")":"(",
    "]":"["
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "{" || char === "(" || char === "[") {
      stack.push(char);
    }

    if (char === "}" || char === ")" || char === "]") {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(isValid(str));
