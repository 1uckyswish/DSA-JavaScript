function power(base, exponent) {
    if(exponent === 0){
        return 1;
    }

    return base * power(base, exponent - 1);
}



const result = power(2, 5);

console.log(result);
module.exports = power;
