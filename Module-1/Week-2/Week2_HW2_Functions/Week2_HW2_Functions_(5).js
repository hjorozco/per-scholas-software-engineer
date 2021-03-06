/**
 * 5. Write a function that returns the number of arguments passed to the function when called
 */

const getNumberOfArguments = (...arguments) => arguments.length;

// Code that uses "numberOfArguments" function.
let numberOfArguments = getNumberOfArguments(1, 2, 3, 4, 5, 6);
console.log("\nThe number of arguments passed into the function when called as " +
    `"getNumberOfArguments(1,2,3,4,5,6)" is: ${numberOfArguments}.`);