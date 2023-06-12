`
Find First and Last Position of Element in Sorted Array
link - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/   
`;

const fun = (nums, x) => {
  const a = nums.indexOf(x);
  console.log("a : ", a);
  let b = nums.reverse().indexOf(x);
  console.log("b : ", b);
  if (b != -1) b = nums.length - (b + 1);
  return [a, b];
};

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
//   Output: [3,4]

console.log("----->", fun(nums, target));

// works in leet code
