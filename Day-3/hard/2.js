`
link - https://leetcode.com/problems/reverse-nodes-in-k-group/
Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:


Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
`



const fun = (arr,x)=>{
    let m = arr.splice(arr.length - (arr.length % x))
    let mno =[]
    for (let i = 0; i <= arr.length; i=i+x) {  
        mno.push(...arr.splice(0,x).reverse())
    }
    return [...mno,...m];
}


// let arr = [1,2,3,4,5] //Output: [2,1,4,3,5]
// let x =  2

let arr = [1,2,3,4,5]  //Output: [2,1,4,3,5]
let x =  3



console.log("------ans--->",fun(arr,x))

// linked list not work