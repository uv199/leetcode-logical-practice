`
1. https://projecteuler.net/problem=22



`;
const fs = require("fs");
let obj = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};
const fun = async (arr) => {
  let mno = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i].split("").map((e) => (total += obj[e]));
    mno += total * (i + 1);
    total = 0;
  }

  console.log("mno: ", mno);
  return mno;
};

fs.readFile("name.txt", (err, data) => {
  if (err) console.log("err: ", err);
  let arr = data.toString().replace(/"/g, "").split(",");
  arr.sort();
  console.log("------ans------>", fun(arr));
});
