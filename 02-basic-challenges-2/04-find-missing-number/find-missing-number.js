// function findMissingNumber(array) {
//     let answer = 0;
//     for(let i = 1; i <= array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             if(i !== array[j]){
//                 answer = i;
//             }
//         }
//     }
//     return answer;
// }

// function findMissingNumber(array) {
//     let answer = 0;
//     for (let i = 1; i <= array.length + 1; i++) {
//         let found = false;
//         for (let j = 1; j < array.length; j++) {
//             if (i === array[j]) {
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             answer = i;
//             break; // Exit the outer loop once the missing number is found
//         }
//     }
//     return answer;
// }

function findMissingNumber(array) {
    let answer = 0;
    const newArray = array.sort((a,b)=> a - b);
    for(let i = 1; i <= newArray.length; i++){
        if(i !== newArray[i - 1]){
            answer = i;
            break;
        }
    }
    return answer;
}

const result = findMissingNumber([1, 3, 4, 5, 6]);

console.log(result);



module.exports = findMissingNumber;


// function findMissingNumber(array) {
//     let answer = 0;
//     const newArray = array.sort((a,b)=> a- b);
//     for(let i = 1; i <= newArray.length; i++){
//         if(i !== newArray[i]){
//                 answer = i;
//         }
//     }
//     return answer;
// }