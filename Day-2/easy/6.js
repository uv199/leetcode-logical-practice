`
https://leetcode.com/problems/valid-palindrome/

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
`;

const fun = (s) => {
  let abc = s
    .trim()
    .split("")
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
  console.log("abc: ", abc);
  let abc2 = abc.split("").reverse().join("");
  if (abc === abc2) return true;
  return false;
};

// let s = "race a car"
let s = "A man, a plan, a gcanal: Panama";
console.log("----->", fun(s));

// works in leet code
