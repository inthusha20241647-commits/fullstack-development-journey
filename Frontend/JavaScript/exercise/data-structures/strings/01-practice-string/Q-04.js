//function to check provided string is a palindrome

function isPalindrome(str){

    let n=str.length;

    for(let i=0;i<n/2;i++){
        if(str[i]!==str[n-i-1]){
            return false
        }
    }
    return true;

}

let str="malayalam";

console.log(isPalindrome(str));