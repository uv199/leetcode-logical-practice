`

9. https://leetcode.com/problems/can-place-flowers/


`;
const fun = (arr, n) => {
  if (arr == null || arr.length == 0) return false;

  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == 0 &&
      (i == arr.length - 1 || arr[i + 1] == 0) &&
      (i == 0 || arr[i - 1] == 0)
    ) {
      arr[i] = 1;
      x++;
    }
    if (x >= n) return true;
  }
  return false;
};

// let arr = [1, 0, 1, 0, 1];
// let arr = [0, 0, 1, 0, 1];
let arr = [1, 0, 0, 0, 1];
// let arr = [0, 0, 1, 0, 1];
let n = 2;
console.log("------ans------>", fun(arr, n));
