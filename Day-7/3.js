`
3. GFG(e)
https://practice.geeksforgeeks.org/problems/equilibrium-point-1587115620/1?page=1&curated[]=1&sortBy=submissions
`;
// const fun = (a) => {
//   let ls;
//   let rs;
//   let n = a.length
//   for (let i = 0; i < n; i++) {
//     ls = 0;
//     for (let j = 0; j < i; j++) ls += a[j];
//     rs = 0;
//     for (let j = i + 1; j < n; j++) rs += a[j];
//     if (ls == rs) return i + 1;
//   }
//   return -1;
// };
const fun = (a) => {
  let sum = 0;
  let lf = 0;
  for (let i = 0; i < n; ++i) sum += a[i];
  for (let i = 0; i < n; ++i) {
    sum -= a[i];
    if (lf == sum) return i + 1;
    lf += a[i];
  }
  return -1;
};

let arr = [1, 3, 5, 2, 2];
// let arr = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log("------ans------>", fun(arr));

// time limit error
