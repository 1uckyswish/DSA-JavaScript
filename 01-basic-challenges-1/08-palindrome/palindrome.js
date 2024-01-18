function isPalindrome(word) {
   let newWord = '';
    for(let i = word.length - 1; i >= 0; i--){
        newWord += word[i];
    }
    return newWord;
   
}


const result1 = isPalindrome('A man, a plan, a canal, Panama');
console.log(result1);

module.exports = isPalindrome;
