`5. Longest Palindromic Substring
Medium
24.3K
1.4K
Companies
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"

`;
const fun = (s) => {
  const subFun = (s, output, index, max, str) => {
    // console.log('max: ', max,output);
    if (index >= s.length) {
      // console.log(
      //   "----->1 ",
      //   max,
      //   output.length,
      //   output,
      //   max < output.length,
      //   output.split("").reverse().join("") == output
      // );
      if (
        max <= output.length &&
        output.split("").reverse().join("") == output
      ) {
        max = output.length;
        str = output;
        console.log("max:-------> ", str); // done
        return str
      }
      return str;
    } else {
      subFun(s, output, index + 1, output.length, str);
      let ele = s[index];
      output += ele;
      return subFun(s, output, index + 1, output.length, str);
    }
  };
  let ans = "";
  let max = 0;
  subFun(s, "", 0, max, ans);
  console.log('subFun(s, "", 0, max, ans): ', subFun(s, "", 0, max, ans));

  return ans;
};

let s = "ababc";
console.log("------ans------>", fun(s));
