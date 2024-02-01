function arraySum(arr) {
    if(arr.length === 0){
        return 0;
    }

    return arr[0] + arraySum(arr.slice(1));
}

const result = arraySum([1, 2, 3, 4, 5]);

console.log(result);

module.exports = arraySum;
