`

5. https://www.codechef.com/problems/CNDY



`;
const fun = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[`${arr[i]}`] = (obj[`${arr[i]}`] || 0) + 1;
    if (obj[`${arr[i]}`] > 2) return "NO";
  }
  return "YES";
};

// let arr = [4 ,8 ,4, 6, 7, 3]
// let arr = [4, 8, 6, 8, 7, 8];
// let arr = [2, 4, 5, 3];
let arr = [8, 7, 9, 8, 4, 6, 2, 8];
let x = 3;

console.log("------ans------>", fun(arr, x));

// 4
// 3
// 4 8 4 6 7 3
// 3
// 4 8 6 8 7 8
// 2
// 2 4 5 3
// 4
// 8 7 9 8 4 6 2 8
