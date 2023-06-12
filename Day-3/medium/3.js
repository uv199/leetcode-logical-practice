`
https://leetcode.com/problems/count-primes/

 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 6, 3, 5, 7.
Example 6:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0

`;
let subFun = function (n) {
  if (n <= 1) {
    return false;
  } else {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  return true;
};
const fun = (n) => {
  // let count = [];
let count=0

  for (let i = 0; i < n; i++) {
    if (subFun(i)) {
      // count.push(n)
      count++
    }
  }
  return count;
};

// console.log(6 / 2);
// console.log(6 / 3);
// console.log(6 / 4);
// console.log(6 / 5);
// console.log(6 / 6);
// console.log(6 / 7);
// console.log(6 / 8);
// console.log(6 / 9);

let n = 300;
console.log("------ans------>", fun(n));


// time limit error