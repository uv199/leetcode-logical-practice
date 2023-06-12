`
Link: https://leetcode.com/problems/median-of-two-sorted-arrays/
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
`;

var fun = (a,b) => {
let abc = [...a,...b].sort((a, b)=>a-b)
if(abc.length>2){
  abc.length
  console.log('abc.length: ', abc.length);
  abc.pop() 
  abc.shift()
  let c = abc.reduce((t,e)=>t+e)
  return abc,abc.length,c/abc.length
}else
{
  let c = abc.reduce((t,e)=>t+e)
  console.log('c: ', c);
  return [c/abc.length]
}};

// let nums1 = [1,3] //Output: 2
// let nums2 = [2] 
let nums1 = [3] //Output: -1
let nums2 = [-2,-1]


// let nums1 =[1,2] //Output: 2.5
// let nums2 = [3,4] 


console.log(fun(nums1,nums2));


