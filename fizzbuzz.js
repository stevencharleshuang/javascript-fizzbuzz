/**
 * Given a starting number and ending number of a range, prints the numbers of the range. 
 * If a number is divisible by 3, prints "fizz".
 * If a number is divisible by 5, prints "buzz".
 * If a number is divisible by 3 and 5, prints "fizzbuzz".
 * If no arguments are passed to the function, default values are used.
 * @param { number } start: The number that the function will begin from
 * @param { number } end: The number that the function should arrive at 
 */
const fizzBuzz = (start = 1, end = 101) => {
  for (let i = start; i <= end; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();