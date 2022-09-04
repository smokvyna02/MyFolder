function palindrome(string1){
    let str1 = '';
    for (let i = string1.length - 1; i >= 0; i--){
        str1 += string1[i];
    }
    return str1;
}
console.log(palindrome("palindrome"));

let str2 = "was it a car or a cat i saw";
function isPalindrome(str){
    let reverseStr = "";
    let strWithoutSpaces = "";
    for (let i = str.length - 1; i >= 0; i--){
        if (str[i] != " "){
            reverseStr += str[i];
        }
    }
    for (let i = 0; i < str.length; i++){
        if (str[i] != " "){
            strWithoutSpaces += str[i];
        }
    }
    if (reverseStr === strWithoutSpaces){
        return true;
    }
    return false;
}
console.log(isPalindrome(str2));