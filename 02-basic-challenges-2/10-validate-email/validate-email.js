function validateEmail(email) {
    const arrayEmail = email.split("");
    let emailRequire = 0;
    for(let i = 0; i < arrayEmail.length; i++){
        if(arrayEmail[i] === '@' || arrayEmail[i] === "." && arrayEmail[0] !== "@"){
            emailRequire++;
        }
    }
    if(emailRequire >= 2){
        return true;
    }
     return false;
}

const result1 = validateEmail('brad@gmail.com');
const result2 = validateEmail('bradgmailcom');

console.log(result1);
console.log(result2);

module.exports = validateEmail;
