function countVowels(word) 
{
    let count = 0;
    let lowerWord = word.toLowerCase();
    for(let i = 0; i < lowerWord.length; i++){
        switch(lowerWord[i]){
            case 'a':
            case 'e':
            case 'o':
            case 'i':
            case 'u':
            count++
            break;
        }
    }
    return count;
}

module.exports = countVowels;
