`347. Top K Frequent Elements
Medium
12.9K
474
Companies
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 
`;

const fun = (n, k) => {
  let obj = {};
  for (ch of n) {
    obj[ch] = (obj[ch] || 0) + 1;
  }
  obj = Object.entries(obj);
  console.log("obj: ", obj);
  obj.sort((a, b) => {
    return b[1] - a[1];
  });
  let returnArr = [];
  for (let i = 0; i < k; i++) {
    returnArr.push(obj[i][0]);
  }
  console.log("returnArr: ", returnArr);
  return returnArr;
};

let n = [1, 1, 1, 2, 2,2, 3, 9, 9, 9, 9, 0, 0, 0, 0, 0];
let k = 3;
// let n = [1, 1];

console.log("----->", fun(n, k));
