let str=[1,1,1,2,3,4,5,5,3,5];

let stack=[];

for(let i=0;i<str.length;i++){
    if(stack[stack.length-1]!==str[i]){
        stack.push(str[i])
    }
}
console.log(stack);