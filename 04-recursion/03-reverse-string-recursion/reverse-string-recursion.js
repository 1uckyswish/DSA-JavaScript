function reverseString(str) {
    if(str === ''){
        return '';
    }

    return reverseString(str.substr(1)) + str[0];
}


const result = reverseString('hello');

console.log(result);


module.exports = reverseString;
