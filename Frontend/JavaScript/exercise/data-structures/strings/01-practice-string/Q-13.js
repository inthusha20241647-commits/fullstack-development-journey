// find all duplicate characters in a string

let str="programming";

let collect={};

for (let i=0;i<str.length;i++){
    if(!collect[str[i]]){
        collect[str[i]]=1
    }else{
        collect[str[i]]++;
    }
     
}

for(let char in collect){
    if(collect[char]>1){
        console.log(char +":"+collect[char]);
    }

}

