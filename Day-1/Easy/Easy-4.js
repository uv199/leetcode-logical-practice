`


https://leetcode.com/problems/remove-duplicates-from-sorted-array/
`
// let array = [1,1,2]
let array = [0,0,1,1,1,2,2,3,3,4]
let uniq = [...new Set(array)];
console.log('uniq: ', uniq);


let abc = array.filter((item, i)=> array.indexOf(item)==i)
console.log('abc: ', abc);


// works but not accept in leet code