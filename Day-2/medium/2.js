`
https://leetcode.com/problems/container-with-most-water/

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Example 2:

Input: height = [1,1]
Output: 1
`;
const fun = (num) => {
  let l = 0;
  let r = A.length - 1;
  let area = 0;

  while (l < r) {
    area = Math.max(area, Math.min(A[l], A[r]) * (r - l));
    if (A[l] < A[r]) l += 1;
    else r -= 1;
  }
  return area;
};

// let num = [1,7,6,2,5,4,8,3,8]

let x = 49;
console.log("------ans------>", fun(num, x));

// accept in leet code
