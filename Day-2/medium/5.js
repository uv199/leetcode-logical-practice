`
https://leetcode.com/problems/compare-version-numbers/

Example 1:

Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
Example 2:

Input: version1 = "1.0", version2 = "1.0.0"
Output: 0
Explanation: version1 does not specify revision 2, which means it is treated as "0".
Example 3:

Input: version1 = "0.1", version2 = "1.1"
Output: -1
Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.
`


const fun = (v1,v2) => {
console.log("v1",v1.split("."))
if(v1.split(".")[0]===v2.split("")[0]) return 0
return -1

  };
  
  let v1 = "1.0"
  let v2 = "1.0.0"
  
  console.log("----->", fun(v1,v2));