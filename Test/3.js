`
3. https://codeforces.com/problemset/problem/1765/E



`;
const fun = (need, silver, gold) => {
  if (need < silver) return 1;
  let difference = +(silver - gold);
  let a = need % silver;
  console.log('a: ', a);
  let b = need - a;
  console.log('b: ', b);
  if (a < silver) return b / silver;
  //   else if (a % -difference === 0) return b / silver;
  else return b / silver + 1;
};

// console.log("------ans------>", fun(100 ,25, 30));
console.log("------ans------>", fun(100, 50, 48));
// console.log("------ans------>", fun(9999997 ,25 ,50));
