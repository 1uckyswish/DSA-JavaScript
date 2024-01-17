function findMaxNumber(arrayOfNums) {
    let result = arrayOfNums[0];
    for(let i = 0; i < arrayOfNums.length; i++){
        if(arrayOfNums[i] > result){
            result = arrayOfNums[i];
        }
    }
    return result;
}

module.exports = findMaxNumber;
