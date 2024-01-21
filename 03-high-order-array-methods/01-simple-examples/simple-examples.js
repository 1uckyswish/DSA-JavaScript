const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const dbl = numbers.map((item, index, arr)=>{
    return item * 2 ;
})

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const evenNum = numbers.filter((num) => num === 5);



/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const sum = numbers.reduce((total, start)=>{
    return total + start;
}, 0)




/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */


// numbers.forEach((num, index)=>{
//     console.log(num[index])
// })


 /**
 * find: Returns the first array element that satisfies a specified condition.
 */

const found = numbers.find((num)=>{
    return num % 2 === 0;
})

console.log(found);


/**
 * some: Checks if at least one array element satisfies a condition.
 */

 

/**
 * every: Checks if all array elements satisfy a condition.
 */


