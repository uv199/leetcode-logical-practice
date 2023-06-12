`
https://leetcode.com/problems/string-to-integer-atoi/

8. String to Integer (atoi)
Example 1:

Input: s = "42"
Output: 42
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.

Example 2:

Input: s = "   -42"
Output: -42

The parsed integer is -42.
Since -42 is in the range [-231, 231 - 1], the final result is -42

Example 3:

Input: s = "4193 with words"
Output: 4193
The parsed integer is 4193.
Since 4193 is in the range [-231, 231 - 1], the final result is 4193.
`;
const fun = (s) => {
  console.log("--------->");
  // console.log(
  //   's.trim().replace("[^0-9\\s.-]", ""): ',
  //   s.trim().replace(/[^-0-9]/g, '')
  // );
  s.startsWith(/[^-0-9]/g);
  console.log(' s.startsWith(/[^-0-9]/g): ',  s.startsWith(/[^-0-9]/g));
  return parseFloat(s.trim().replace(/[^-0-9]/g,''));

};

let s = "-987 words and -987";
// let s = " with words 4193"
// let s = "   -42"
console.log("------ans------>", fun(s));
