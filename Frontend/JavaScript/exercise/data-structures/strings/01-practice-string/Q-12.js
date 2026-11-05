// find the character that appears the most times in a given string.

let str="apple";
let collect={}
for(let i=0;i<str.length;i++){
    if(!collect[str[i]]){
        collect[str[i]]=1;
    }else{
        collect[str[i]]++;

    }
}
let max=0;
let maxCharacter="";
for(let char in collect){
    if(collect[char]>max){
        max=collect[char];
        maxCharacter=char;
    }
}
console.log(maxCharacter);


