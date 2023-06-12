`
https://leetcode.com/problems/rotate-image/

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 
`;

const fun = (nums) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let ele = [];
    for (let j = 0; j < nums.length; j++) {
      ele.push(nums[j][i]);
    }
    arr.push(ele.reverse());
  }
  console.log('arr: ', arr);
  return arr;
};

// let nums = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// Output: [[7,4,1],[8,5,2],[9,6,3]]

let nums = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
// Output: [[15, 13, 2, 5],[14, 3, 4, 1],[12, 6, 8, 9],[16, 7, 10, 11],];
console.log("----->", fun(nums));

// works in vscode but not works in leet code  if we can put log of return array it can give proper but it is not return proper value
