function reverseString(word) {
    let newWord = '';
    for(let i = word.length - 1; i >= 0; i--){
        newWord += word[i];
    }
    return newWord;
}

const result = reverseString('hello world');

console.log(result);


module.exports = reverseString;
