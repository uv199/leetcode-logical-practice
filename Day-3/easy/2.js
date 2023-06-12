`
https://leetcode.com/problems/remove-element/

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
`;

const fun = (nums, k) => {
  let l1 = nums.join("");
  console.log(l1.replace(eval("/" + k + "/g"), ""));
  let mno = nums.join("").replace(eval("/" + k + "/g"), "");
  let a = mno.split("");
  return a.map((e,i)=>{
    return a[i]=parseInt(a[i])
  })
};

// let nums = [3,2,2,3];
// let  k= 3
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let k = 0;

console.log("----->", fun(nums, k));

// works good in vs code not in leet code


// let a = []
// let end = nums.length-1
// let strat = 0
// function subfun(end,start,nums,k,a){
//   if(k>=0){
//     return 
//   }
//   if(nums[length]!==k){
//     a.push(nums[length])
//     subfun((end,start,nums,k,a))
//   }if(nums[length]!==k)
// }"