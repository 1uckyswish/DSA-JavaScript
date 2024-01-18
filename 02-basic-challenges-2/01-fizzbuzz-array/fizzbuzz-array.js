function fizzBuzzArray(number) {
  let newArray = [];

  for (let i = 1; i <= number; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        newArray.push("FizzBuzz");
        break;
      case i % 3 === 0:
        newArray.push("Fizz");
        break;
      case i % 5 === 0:
        newArray.push("Buzz");
        break;
      default:
        newArray.push(i);
    }
  }

  return newArray;
}


function fizzBuzzArray(number) {
  let newArray = [];

  for (let i = 1; i <= number; i++) {
    const result =
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i;

    newArray.push(result);
  }

  return newArray;
}



module.exports = fizzBuzzArray;
