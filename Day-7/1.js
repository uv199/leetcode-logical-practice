`
128. Longest Consecutive Sequence

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

`;
// const fun = (arr) => {
//   //  let max= Math.max(...arr)
//   //  let max= Math.min(...arr)
//   arr.sort((a, b) => a - b);
//   console.log("arr: ", arr);
//   if (arr.length === 0) return 0;
//   let max = 0;
//   let x = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + 1 === arr[i + 1] || i === 0) {
//       x += 1;
//       if (x >= max) {
//         max = x;
//       }
//       if (arr[i] - 1 !== arr[i - 1] || i !== 0) {
//         x = 1;
//       }
//     }
//   }
//   return max;
// };
const fun = (arr) => {
  if (arr.length === 0) return 0;
  let ans = 0;
  let count = 0;
  arr.sort((a, b) => a - b);

let abc = [...new Set(arr)] || [0]
  for (let i = 0; i < abc.length; i++) {
    if (i > 0 && abc[i] == abc[i - 1] + 1) count++;
    else count = 1;

    ans = Math.max(ans, count);
  }
  return ans;
};

let arr = [100, 4, 200, 1, 3, 2,2];
// let arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// let arr = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
// let arr = [1]
// let s = "3+2*2"
console.log("------ans------>", fun(arr));
