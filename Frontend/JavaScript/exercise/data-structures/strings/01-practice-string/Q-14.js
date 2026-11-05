// count the frequency of each word in a given sentence.

let sentence="apple banana apple orange banana apple";

let word=sentence.split(" ");

let collect={};

for(let i=0;i<word.length;i++){
    
    if(!collect[word[i]]){
        collect[word[i]]=1
    }
    else{
        collect[word[i]]++;
    }
}
console.log(collect)