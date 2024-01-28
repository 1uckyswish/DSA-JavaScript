function validatePassword(password) {
    const lengthValue = password.length >= 8;
    //*SPLIT THE WORD INTO AN ARRAY, THEN USE SOME TO CHECK IF ONE CONDITION IS TRUE, IF ONE IS CAPS AND ONE IS NOT LOWER
    const hasUpperCase = password.split("").some((char)=> char === char.toUpperCase() && char !== char.toLowerCase());
    const hasLowerCase = password.split("").some((char)=> char === char.toLowerCase() && char !== char.toUpperCase());
    const hasDigit = password.split("").some((char)=>  !isNaN(parseInt(char, 10)));

    return lengthValue && hasUpperCase && hasLowerCase && hasDigit;
}


const result1 = validatePassword('Abc12345');
const result2 = validatePassword('password');

console.log(result1, result2);
module.exports = validatePassword;
