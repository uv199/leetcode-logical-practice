`
https://leetcode.com/problems/valid-square/
Example 1:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: true
Example 2:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
Output: false
Example 3:

Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
Output: true

`;
const fun = (p1, p2, p3, p4) => {
  let a = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)); //p1-p2
  let b = Math.sqrt(Math.pow(p1[0] - p3[0], 2) + Math.pow(p1[1] - p3[1], 2));
  let c = Math.sqrt(Math.pow(p1[0] - p4[0], 2) + Math.pow(p1[1] - p4[1], 2));
  //
  let a1 = Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2)); //p2-p2
  let b1 = Math.sqrt(Math.pow(p2[0] - p3[0], 2) + Math.pow(p2[1] - p3[1], 2));
  let c1 = Math.sqrt(Math.pow(p2[0] - p4[0], 2) + Math.pow(p2[1] - p4[1], 2));
  //
  let a2 = Math.sqrt(Math.pow(p3[0] - p1[0], 2) + Math.pow(p3[1] - p1[1], 2)); //p3-p3
  let b2 = Math.sqrt(Math.pow(p3[0] - p2[0], 2) + Math.pow(p3[1] - p2[1], 2));
  let c2 = Math.sqrt(Math.pow(p3[0] - p4[0], 2) + Math.pow(p3[1] - p4[1], 2));
  //
  let a3 = Math.sqrt(Math.pow(p4[0] - p1[0], 2) + Math.pow(p4[1] - p1[1], 2)); //p4-p1
  let b3 = Math.sqrt(Math.pow(p4[0] - p2[0], 2) + Math.pow(p4[1] - p2[1], 2));
  let c3 = Math.sqrt(Math.pow(p4[0] - p3[0], 2) + Math.pow(p4[1] - p3[1], 2));
  let arr = [a, b, c].sort((a, b) => a - b).toString();
  console.log('arr: ', arr);
  let arr1 = [a1, b1, c1].sort((a, b) => a - b).toString();
  console.log('arr1: ', arr1);
  let arr2 = [a2, b2, c2].sort((a, b) => a - b).toString();
  console.log('arr2: ', arr2);
  let arr3 = [a3, b3, c3].sort((a, b) => a - b).toString();
  console.log('arr3: ', arr3);
  if (arr === arr1 && arr1 === arr2 && arr2===arr3) return true;
  return false;
};

// let p1 = [1, 0];
// let p2 = [-1, 0];
// let p3 = [0, 1];
// let p4 = [0, -1];

// let p1 = [7, -3];
// let p2 = [5, -3];
// let p3 = [6, -2];
// let p4 = [6, -4];

// let p1 = [5, 0];
// let p2 = [-1, 0];
// let p3 = [0, 5];
// let p4 = [0, -1];

let p1 = [0, 0];
let p2 = [5, 0];
let p3 = [5, 4];
let p4 = [0, 4];
console.log("------ans------>", fun(p1, p2, p3, p4));
