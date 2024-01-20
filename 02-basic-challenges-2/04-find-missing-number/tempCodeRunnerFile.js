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