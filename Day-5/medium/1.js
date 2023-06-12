`
https://leetcode.com/problems/generate-parentheses/

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

`;
const fun = (n) => {
  console.log("n: ", n);
  let res = [];
  let x = "";
  const subFun = (x, open, close, res, n) => {
    console.log("x: ", x);
    if (x.length == 2 * n) {
      res.push(x);
      return;
    }
    if (open < n) subFun(x + "(", open + 1, close, res, n);
    if (close < open) subFun(x + ")", open, close + 1, res, n);
  };

  subFun(x, 0, 0, res, n);
  return res;
};

let n = 3;
console.log("------ans------>", fun(n));
