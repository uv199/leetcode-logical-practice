`

10. https://codingcompetitions.withgoogle.com/codejam/round/000000000043580a/00000000006d1145


`;
const fun = (str) => {

   for (let i = 0; i < str.length; i++) {
    if(str[i]==='?'){
        str[i+1]+'j'
        console.log('str[i+1]+ ', str[i+1]+'C');
        console.log('str[i+1]+', str[i+1]+'j');
    }
   }
};
// 4
// 2 3 CJ?CC?
// 4 2 CJCJ
// 1 3 C?J
// 2 5 ??J???
// cj jc
console.log("------ans------>", fun("CJ?CC?"));
