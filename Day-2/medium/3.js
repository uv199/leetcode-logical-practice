`
https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]

`;

const fun = (str) => {
  if (str == "") return [];
  let table = [ '0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
  let res = [];
  let que = [""];

  while (que.length > 0) {
    let str = que[0];
    que.shift();
    console.log("str.length: ", str, str.length);
    console.log("str.length: ", str, str.length);
    if (str.length == str.length) {
      res.push(str);
    } else {
      let s = Number(str.charAt(str.length));
      let val = table[s];
      for (i = 0; i < val.length; i++) {
        que.push(str + val.charAt(i));
      }
    }
  }

  return res;
};

let x = "564";
// console.log("------ans------>", fun(x));
console.log("------ans------>", letterCombinations(x));
