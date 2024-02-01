function numberRange(start, end) {
    let answer = [];
    if(start === end){
        return answer.push(start);
    }

    return start + numberRange(start, end + 1)
}

module.exports = numberRange;
