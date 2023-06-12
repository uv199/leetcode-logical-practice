`
anagram of two string 
`;

const fun = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  let obj = {};
  for (ch of s1) {
    console.log(ch);
    obj[ch] = (obj[ch] || 0) + 1;
  }
  for (ch of s2) {
    if (obj[ch]) obj[ch]--;
    else return false;
  }
  console.log("obj: ", obj);
  return true;
};

let s1 = "nili";
let s2 = "nill";

console.log("----->", fun(s1, s2));
