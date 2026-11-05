//program to remove consecutive duplicates

let str='aaabbcdaa';

let stack=[];

for(let i=0;i<str.length;i++){
    if(str.length===0 || stack[stack.length-1]!==str[i]){
        stack.push(str[i]);

    }
}
console.log(stack.join(''));