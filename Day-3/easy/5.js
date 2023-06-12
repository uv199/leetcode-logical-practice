`

https://leetcode.com/problems/longest-palindrome/

409. Longest Palindrome

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

`;

const fun = (str) => {
  if (str === str.split("").reverse().join("")) return str.length;
  str = str.split("").sort().join("");

  console.log("str:---- ", str);
  let s1 = [];
  let flag = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1] && flag) {
      s1.push(str[i]);
      flag = false;
    } else if (str[i] === str[i + 1]) {
      s1.push(str[i]);
      i = i + 1;
    }
  }
  let abc = [...s1].reverse();
  !flag && s1.shift();
  console.log("s1: ", `${abc.join("") + s1.join("")}`);
  return `${abc.join("") + s1.join("")}`.length;
};

// let str = "a";
let str = "abccccdd";
// let str = "abcde";

console.log("---ans----->", fun(str));

// accept in leet code
