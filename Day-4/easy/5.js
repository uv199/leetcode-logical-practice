`
https://leetcode.com/problems/majority-element-ii/


m

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]

`;


var majorityElement = function (nums) {
  let l = Math.floor(nums.length / 3);
  console.log("l: ", l);

  let obj = {};
  let max = [];
  for (ch of nums) {
    obj[ch] = (obj[ch] || 0) + 1;
    if (obj[ch] > l && !max.includes(ch)) max = [...max,ch];
  }

  return max;
};

// let nums = [1];
let nums = [3, 2, 3, 2, 0, 0, 1, 1];
// let nums = [3,3,3,9,6,0,0,0,0];

console.log("---ans----->", fun(nums));
