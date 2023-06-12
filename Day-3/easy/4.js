`
https://leetcode.com/problems/summary-ranges/

228. Summary Ranges

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
`;

const fun = (nums) => {
  let arr = [];
  let str = "";
  let start;
  
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) start = nums[i];
    if (nums[i] + 1 !== nums[i + 1]) {
      str = `${start}` + "->" + `${nums[i]}`;
      if (start == nums[i]) str = `${start}`;
      start = nums[i + 1];
      arr.push(str);
      str = "";
    }
  }
 return arr;
};

// let nums = [4, 1, 2, 1, 2];
// let  nums = [2,2,1]
// let nums = [0, 1, 2, 4, 5, 7];
let  nums =  [0,2,3,4,9,8,6]
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
// `;

console.log("----->", fun(nums));

//accept in leet code 
