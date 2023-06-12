`
Swap Nodes in Pairs

https://leetcode.com/problems/swap-nodes-in-pairs/


Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]
 
`


const fun = (nums) => {  
    if(nums ===[] || nums.length===1) return nums
    let a 
    if(nums.length % 2 !==0) a = nums.pop()
    console.log("---->a",a)
    for (let i = 0; i < nums.length; i=i+2) {
       nums[i] = nums[i+1] +  nums[i]
       nums[i+1] = nums[i] -  nums[i+1]
       nums[i] =  nums[i]-nums[i+1]
    }
    return [...nums,a]
  };

let nums = [1]
// let nums = [1,2,3,4,5]
  console.log("----->", fun(nums));


  // link list not work 


