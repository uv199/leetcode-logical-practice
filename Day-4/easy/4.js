`
link = https://leetcode.com/problems/excel-sheet-column-title/description/
Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"
`;

const fun = (num) => {
  let char = [];
  while (num > 0) {
    let rem = num % 26;
    if (rem == 0) {
      char.push("Z");
      num = Math.floor(num / 26) - 1;
    } else {
      char.push(String.fromCharCode(rem - 1 + "A".charCodeAt(0)));
      num = Math.floor(num / 26);
    }
  }
  return char.reverse().join("");
};
// const fun = (num) => {
//    let chr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//   console.log("chr: ", chr.length);
//   num % 26;
//   console.log("num%26: ", num % 26);
//   console.log("char 1 ", chr[(num % 26) - 1]);
//  num = num - (num % 26) - 1;
//   console.log("char 2 ", chr[(num % 26) - 1]);
// };

let num = 777;

console.log("----->", fun(num));
