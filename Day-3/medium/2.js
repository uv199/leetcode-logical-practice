`
https://leetcode.com/problems/maximum-subarray/

53. Maximum Subarray
 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
`;
const fun = (a) => {
  var int = Math.pow(2, 53);
  console.log('int: ', int);
  var y = -int 
  var x = 0;

  for (var i = 0; i < a.length; i++) {
    x = x + a[i];
    console.log('x: ', x);
    if (y < x) y = x;
    console.log('x < 0: ', x < 0);
    if (x < 0) x = 0;
  }
  return y;
};

let nums = [-2,-2,-1,-5]
// let nums = [5, 4, -1, 7, 8];
console.log("------ans------>", fun(nums));


// take help of online
