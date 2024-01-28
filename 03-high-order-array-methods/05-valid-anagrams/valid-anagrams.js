function validAnagrams(word1, word2) {
    const arrayWord1 = word1.split("");
    const arrayWord2 = word2.split("");
    
    if(arrayWord1.length !== arrayWord2.length){
        return false;
    }

    // Check if all characters in arrayWord1 exist in arrayWord2
    const areAnagrams1 = arrayWord1.every((char) => arrayWord2.includes(char));

    // Check if all characters in arrayWord2 exist in arrayWord1
    const areAnagrams2 = arrayWord2.every(char => arrayWord1.includes(char));

    // Both conditions must be true for the words to be anagrams
    return areAnagrams1 && areAnagrams2;
}

// Example usage:
const result = validAnagrams('listen', 'silent');
console.log(result);  // Output: true

//#2

// function validAnagrams(word1, word2) {
//     const arrayWord1 = word1.split("");
//     const arrayWord2 = word2.split("");
    
//     if(arrayWord1.length !== arrayWord2.length){
//         return false;
//     }

//     // Check if all characters in arrayWord1 exist in arrayWord2
//     const areAnagrams1 = arrayWord1.every(char => arrayContainsCharacter(arrayWord2, char));

//     // Check if all characters in arrayWord2 exist in arrayWord1
//     const areAnagrams2 = arrayWord2.every(char => arrayContainsCharacter(arrayWord1, char));

//     // Both conditions must be true for the words to be anagrams
//     return areAnagrams1 && areAnagrams2;
// }

// // Helper function to check if an array contains a character
// function arrayContainsCharacter(arr, char) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === char) {
//             return true;
//         }
//     }
//     return false;
// }

module.exports = validAnagrams;
