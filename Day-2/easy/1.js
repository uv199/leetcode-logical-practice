`
https://leetcode.com/problems/single-number/

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

`;

const fun = (nums) => {
  let abc = 0;
  let mno = false;
  for (let i = 0; i < nums.length && !mno; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j) {
        break;
      } else if (j === nums.length - 1) return nums[i];
    }
  }
};

// let nums = [4, 1, 2, 1, 2];
// let  nums = [2,2,1]
let  nums = [1]

console.log("----->", fun(nums));

//accept in leet code
