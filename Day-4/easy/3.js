`
max carector in string
`;

const fun = (str) => {
  let obj = {};
  let max;
  for (ch of str) {
    obj[ch] = (obj[ch] || 0) + 1;
    if (obj[ch] > obj[max] || !max) max = ch;
  }
  return max;
};
let str = "keem";

console.log("----->", fun(str));
