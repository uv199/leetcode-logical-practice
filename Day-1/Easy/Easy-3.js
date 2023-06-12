`
https://leetcode.com/problems/palindrome-number/
`;

// Input: x = 121
// Output: true
let fun = (num) => {
  if (num.toString() === num.toString().split("").reverse().join(""))
    return true;
  else return false;
};

console.log(fun(121));


// accept in leet code

