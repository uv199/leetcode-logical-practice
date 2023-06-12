`
6. Zigzag Conversion

Medium

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"

`;
const fun = (s, n) => {
  if (n === 1) return s;
  let x = 2 * (n - 1);
  let res = "";
  for (let currRow = 0; currRow < n; currRow++) {
    let index = currRow
    while (index < s.length) {
      res+=s[index]
      if (currRow != 0 && currRow != (n - 1)) {
        let a = x - 2 * currRow;
        let b = index + a;
        if (b < s.length) {
          res += s[b];
        }
      }
      index += x;
    }
  }
  console.log('res: ', res);

};

let s = "PAYPALISHIRING"
// Output: "PINALSIGYAHRPI
console.log("------ans------>", fun(s, 4));
