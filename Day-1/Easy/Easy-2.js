// let obj = {I:1,
// V:5,
// X:10,
// L:50,
// C:100,
// D:500,
// M:1000}


// let fun = (str)=>{
// let total =0

// for (let i = 0; i < str.length; i++) {
//     const a =obj[`${str[i]}`];
//     if (i + 1 < str.length) {
//     const b = obj[`${str[i-1]}`]
//     if(a>=b){
//         total+=a
//     }else total = total + (a-b)}
// }
// return total

// }

// console.log(fun("LVIII"))



`  
https://leetcode.com/problems/length-of-last-word/
`
let  s = "   fly me   to   the moon  "




var lengthOfLastWord = (s)=> {

return s.trim().split("").reverse().join("").split(" ").shift().length

};

console.log(lengthOfLastWord(s))
