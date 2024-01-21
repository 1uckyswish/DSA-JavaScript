function sumOfEvenSquares(array) {
    const filterNumbs = array.filter((num)=> num % 2 === 0);
    const squareNumbs = filterNumbs.map((num) => num * num);
    const sum = squareNumbs.reduce((total, start) => {
        return total + start;
    }, 0)

    return sum;
}

module.exports = sumOfEvenSquares;
