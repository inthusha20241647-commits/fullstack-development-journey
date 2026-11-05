//program to check whether string is isogrram or not

let str="machine";

function Isogram(str){
    let checkChars={};
    for(let i=0;i<str.length;i++){
        let characters=str[i].toUpperCase();

        if (checkChars[characters]){
            return false;

        }
        checkChars[characters]=true;
    }
    return true

}
console.log(Isogram(str))