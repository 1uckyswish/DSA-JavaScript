function findFirstNonRepeatingCharacter(str) {
  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    let isRepeating = false;

    // Check if the current character is repeating by iterating through the string again
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isRepeating = true;
        break;
      }
    }

    // If the current character is not repeating, return it
    if (!isRepeating) {
      return str[i];
    }
  }

  // If no non-repeating character is found, return null
  return null;
}


const result1 = findFirstNonRepeatingCharacter('programming');
const result2 = findFirstNonRepeatingCharacter('abacddbec');

console.log(result1);
console.log(result2);
module.exports = findFirstNonRepeatingCharacter;
