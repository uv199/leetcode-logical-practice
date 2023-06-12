`
78. Subsets
Medium
13.8K
198
Companies
Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
`;
const fun = (s) => {
  const subFun = (s, output, index, ans) => {
    if (index >= s.length) {
      console.log("output: ", typeof output);
      ans.push([...output]);

      return;
    } else {
      subFun(s, output, index + 1, ans);
      let ele = s[index];
      output = [...output, ele];
      return subFun(s, output, index + 1, ans);
    }
  };
  let ans = [];
  subFun(s, "", 0, ans);
  console.log("ans: ", ans);
  return ans;
};

let s = [1, 2, 3];
// let s = "abc";
console.log("------ans------>", fun(s));
