`
Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
`;

var fun = (str) => {
  //   str = str.split("");
  let abc = 0;
  let mno = {};
  for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
        console.log(
          "------>",
          str[i],
          str[j],
          i,
          j,
          str[i] === str[j] && i !== j,
          abc
        );
        if (str[i] === str[j] && i !== j) {
          console.log("=============>", abc, mno < abc,"----->",mno[`${str[i]}`]);

          if (str[i] in mno && mno[`${str[i]}`] < abc) mno[`${str[i]}`] = abc;
          else  mno[`${str[i]}`] = abc
          abc = 0;
          break;
        } else abc += 1;
      }
    // }
  }
  console.log("======mon=======>", mno);
  return abc;
};

// let s = "abcabcbb"; //Output: 3
// let s = "bbbbb" //Output: 1
let s = "pwwk"; //Output: 3
// console.log(fun(s))
fun(s);
