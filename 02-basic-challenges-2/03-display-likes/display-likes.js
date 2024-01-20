function displayLikes(array) {
    switch(array.length){
        case 0: return 'no one likes this';
        case 1: return `${array[0]} likes this`;
        case 2: return `${array[0]} and ${array[1]} like this`;
        case 3: return `${array[0]}, ${array[1]} and ${array[2]} like this`;
        case 4: return `${array[0]}, ${array[1]} and 2 others like this`;
        case 5: return `${array[0]}, ${array[1]} and 3 others like this`;
        default: return 'no one likes this';
    }
}

module.exports = displayLikes;
