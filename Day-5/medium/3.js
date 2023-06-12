`
12. Integer to Roman
Medium
5.4K
5K
Companies
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

`;
const fun = (n) => {
  let obj = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let arr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  // let str = "";
  const fun = (n, x, str) => {
    if (n <= 0) {
      str+ obj[arr[x]]
      return str;
    } else if (n - arr[x] >= 0) {
      return fun(n - arr[x], x, str + obj[arr[x]]);
    } else if (n - arr[x] < 0) {
      return fun(n, x - 1, str);
    }
  };

  return fun(n, arr.length - 1, "");
};

let n = 58;
// Input: num = 58
// Output: "LVIII"
console.log("------ans------>", fun(n));
