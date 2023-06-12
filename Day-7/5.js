`
7. cfo(e)
https://codeforces.com/problemset/problem/705/A
`;
const fun = (n) => {
  let str = "";
  let x;
  for (let i = 1; i < n + 1; i++) {
    i === n ? (x = "it") : (x = "that");
    // console.log('i === n: ', i === n);
    // console.log('n % 2: ', i % 2);
    if (i % 2 == 0) str += " i hate " + x;
    else str += " i love " + x;
  }
  console.log("str: ", str);
  return str
};

console.log("------ans------>", fun(3));
