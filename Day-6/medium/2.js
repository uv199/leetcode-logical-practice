`

`;
const fun = (n) => {
  console.log("n: ", n);
  if (n === 1) return true;

  if (n > 0 && Number.isInteger(n)) return fun(n / 2);

  return false;
};

let n = 3;
console.log("------ans------>", fun(n));
