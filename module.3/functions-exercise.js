//
// 1. given an array of integers return the sum
// if array is empty return 0

const numbers = [1, 2, 3, 4, 5];
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  // if array is empty or = to 0
  if (arr.length === 0) {
    // if arr.length === 0 returns below
    return "please enter a valid array";
  }

  return total;
}
console.log(sumArray(numbers)); // should return 15

// 2. given an array of integers return the smallest integer
// if array is empty return undefined

// Had to look up the below:
// Math.min built in function that finds the smallest number of a set.
// ...array is a "spread" operator that splits up an array into individual elements.
const numbers2 = [5, 3, 8, 1, 4];
function smallestNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    return Math.min(...arr);
  }
}
console.log(smallestNumber(numbers2)); // should return 1

// 3. given an string return the string reversed

// 4. given an integer return the integer reversed
// for example, 1234 should return 4321

// 5. given a string return the string with the first letter of each word capitalized
// for example, "hello world" should return "Hello World"

// 6. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// bonus write unit tests for each function
