`
242. Valid Anagram
Easy
8.5K
276
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
`;
const fun = (s, t) => {
  if (s.length !== t.length) return false;
  let obj = {};
  for (ch of s) {
    obj[ch] = (obj[ch] || 0) + 1;
    console.log("ch: ", ch);
  }
  for (ch of t) {
    if (!obj[ch]) return false;
    obj[ch] = obj[ch] - 1;
    if (obj[ch] < 0) return false;
  }
  return true;
};

let s = "anagram";
let t = "nagaram";

console.log("------ans------>", fun(s, t));
