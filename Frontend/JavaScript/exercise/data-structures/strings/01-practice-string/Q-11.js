// find the first character that appears more than once in a given string.

let str = "January";

let collect = {};

function firstChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (!collect[str[i]]) {
      collect[str[i]] = 1;
    } else {
      collect[str[i]]++;
    }
  }
   for (let i = 0; i < str.length; i++) {
    if(collect[str[i]] !== 1){
        return str[i];
        
    }
   }
}

console.log(firstChar(str));
