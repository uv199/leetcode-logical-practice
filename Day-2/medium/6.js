`
https://leetcode.com/problems/sort-an-array/
912. Sort an Array
Medium

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

`;

// const fun = (arr) => {
//   console.log("arr: ", arr);
//   for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       console.log("arr[i] > arr[j + 1]: ", arr[i] > arr[j + 1]);
//       if (arr[i] > arr[j]) {
//         let a = arr[j];
//         arr[j] = arr[i];
//         arr[i] = a;
//       }
//     }
//   }
//   return arr;
// };
const fun = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};

let nums = [2, 0, 2, 1, 1, 0];
// nums.sort();
// console.log('nums.sort(): ', nums.sort());
console.log("---->", fun(nums));

// accept in leet code
