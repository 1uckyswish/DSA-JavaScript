function generateHashtag(word) {
    const trimmedWord = word.trim();
    const wordArray = trimmedWord.split(" ");

    // Check if the trimmed word is empty or too long
    if (wordArray.length === 0 || trimmedWord === '' || trimmedWord.length >= 140) {
        return false;
    }

    wordArray.forEach((item, index) => {
        wordArray[index] =  item.charAt(0).toUpperCase() + item.slice(1);
    });

    return "#" + wordArray.join("");
}

//  const test = generateHashtag(
//       'This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140'
//     )

// console.log(test);

const result = generateHashtag('hello world');

console.log(result);
module.exports = generateHashtag;
