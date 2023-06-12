`
https://leetcode.com/problems/sliding-window-maximum/

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]


`


const fun = (arr,x)=>{
    if(arr.length===1 || arr.length===0 ) return arr
    let abc =[] 
    for (let i = 0; i <= arr.length-x; i++) {
        abc.push( Math.max(...arr.slice(i,i+x)))   
    }
   return abc
}


// let arr = []
// let x =  1
let arr = [1,3,-1,-3,5,3,6,7]
let x =  3


console.log("------ans--->",fun(arr,x))


// works but give time limit error in leet code 