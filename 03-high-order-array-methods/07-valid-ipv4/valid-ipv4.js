const isValidIPv4 = (numbers) => {
    const numbersSplit = numbers.split(".");

    // Check if the length is not equal to 4
    if (numbersSplit.length !== 4) {
        return false;
    }

    const answer = numbersSplit.every((item) => {
        const numericItem = Number(item); // Convert item to integer
        return !isNaN(numericItem) && numericItem >= 0 && numericItem <= 255;
    });

    return answer;
};

const result1 = isValidIPv4('123.045.067.089');
const result2 = isValidIPv4('122.164.23.21.33');

console.log(result1);
module.exports = isValidIPv4;
