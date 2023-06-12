`
2. https://codeforces.com/problemset/problem/1792/B



`;
const fun = (arr) => {
  // let a = 0;
  // let b = 0;
  let j1 = arr[0];
  let j2 = arr[1];
  let j3 = arr[2];
  let j4 = arr[3];
  // let x = Math.min(j2, j3);
  // for (let i = 0; i < x; i++) {
  //   a += 1;
  //   b += 1;
  // }

  // let m = 0;
  // if (j4 === 0) m = arr[0];
  // else {
  //   let b = Math.min(j1, j4);
  //   if (b === j1) m = b * 2 + 1;
  //   else {
  //     let d = j1 - b + 1;
  //     console.log("d: ", d);
  //     m = b * 2 + d;
  //   }
  // }
  // m + a + b;
  // if (j2 === 0 || j3 === 0) m--;
  // console.log("m+a+b+1: ", m, a, b, m + a + b);

  return j1 + Math.min(j2, j3) * 2 + Math.min(j1 + 1, Math.abs(j2 - j3) + j4)
};

// let arr = [2, 5, 0, 0]s;
// let arr = [5, 2, 0, 5];
// let arr = [5, 0, 0, 2];
let arr = [4, 5, 10, 2];
console.log("------ans------>", fun(arr));

// 5 0 0 2
// 0 0 0 5
// 2 5 10 6
// 3 0 0 7

// 1 0 1 0 0 


// ✅1. https://projecteuler.net/problem=22
// ✅2. https://codeforces.com/problemset/problem/1792/B
// ✅3. https://codeforces.com/problemset/problem/1765/E
// ✅4. https://www.codechef.com/problems/ATM2
// ✅5. https://www.codechef.com/problems/CNDY
// ✅6. https://practice.geeksforgeeks.org/problems/product-array-puzzle4525/1?page=2&company[]=Morgan%20Stanley&company[]=Intuit&company[]=Directi&sortBy=submissions
// ✅7. https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1?page=1&company[]=Flipkart&curated[]=1&sortBy=submissions
// ✅8. https://leetcode.com/problems/apply-discount-every-n-orders/
// ✅9. https://leetcode.com/problems/can-place-flowers/
// 10. https://codingcompetitions.withgoogle.com/codejam/round/000000000043580a/00000000006d1145