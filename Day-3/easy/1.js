`

https://leetcode.com/problems/roman-to-integer/
  Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
`;

const fun = (str) => {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let abc = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] < obj[str[i + 1]]) {
      abc = abc + (obj[str[i + 1]] - obj[str[i]]);
      i = i + 1;
    } else abc = abc + obj[str[i]];
  }
 return abc;
};
// let s = "MCMXCIV";
// let s = "LVIII";
let s = "III";
Output: 1994;

console.log("----->", fun(s));

// accept in leet code
