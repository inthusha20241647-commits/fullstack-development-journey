//count the occurances of a specific character in a string

let word="pineapple";
let character='p';
let count=0;

for(let i=0;i<word.length;i++){
    let char=word[i].toLowerCase();
    if(char === character){
        count++;
    }
    
}
return count;