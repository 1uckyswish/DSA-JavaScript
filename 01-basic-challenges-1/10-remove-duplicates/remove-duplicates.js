function removeDuplicates(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}


const result = removeDuplicates([1, 2, 3, 2, 4, 1, 5])
console.log(result);

module.exports = removeDuplicates;
