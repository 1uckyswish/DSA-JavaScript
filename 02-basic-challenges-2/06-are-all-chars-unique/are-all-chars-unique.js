function areAllCharactersUnique(word) {
    const wordArray = word.split('');
    const result = [];
    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i] !== result[i - 1]){
           result.push(wordArray[i]);
        }else{
            return false;
        }
    }
    return true
}

const result1 = areAllCharactersUnique('abcdefg');
const result2 = areAllCharactersUnique('abcdefgA');
const result3 = areAllCharactersUnique('programming');

console.log(result1);
console.log(result2);
console.log(result3);

module.exports = areAllCharactersUnique;
