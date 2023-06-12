`
6. cfo(e)
https://codeforces.com/problemset/problem/617/A
`;
const fun = (n) => {
  console.log('n: ', n);
  let steps = [5, 4, 3, 2, 1];
  let x = 0;
  for (let i = 0; n>0; i++) {
    let b = (n-(n%steps[i]))/steps[i]
    x+=b
    n-= steps[i]*b
  }
return x
};

let n = 7;
// let s = "abc";
console.log("------ans------>", fun(n));
