function countOccurrences(word, char) {
    let result= 0;
    const sensChar = char.toLowerCase();
    for(let i = 0; i < word.length; i++){
        if(word[i] === sensChar){
            result++;
        }
    }
    return result;
}

module.exports = countOccurrences;
