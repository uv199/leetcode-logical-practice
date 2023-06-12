`
https://leetcode.com/problems/power-of-four/

342. Power of Four

Input: n = 16
Output: true
Example 2:

Input: n = 5
Output: false
Example 3:

Input: n = 1
Output: true

`;

const fun = (n) => {
  if(n===1)return true
  if(n<=0) return false
  else{
    let abc=0
    for (let i = 0; i < n ; i++) {
      abc === 0 ? abc = n/4 : abc = abc/4
     if(abc<4) break
    }
    return abc ===1 ? true : false
  }
};
let n = 64

console.log("----->", fun(n));
