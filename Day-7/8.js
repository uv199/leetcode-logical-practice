`
5. cf(e)
https://www.codechef.com/problems/TAXSAVING
`;
let fun = (str, n) => {
  let res = [];
  let abc = str.split("  ").map((e) => {
    return e.split(" ");
  });
  for (let i = 0; i < abc.length; i++) {
    res.push(parseInt(abc[i][0]) - parseInt(abc[i][1]));
  }
  return res.join(" ");
};

let str = "4 2  8 7  5 1  2 1";
let n = 4;
console.log("-------> ", fun(str, n));
