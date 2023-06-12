`
2. cgpt
Given an array of strings, group anagrams together.
Example: Input: ["eat", "tea", "tan", "ate", "nat", "bat"]. Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
`;
const fun = (arr) => {
  let subArr = [...arr];
  subArr = subArr.map((e, i) => {
    return { val: e.split("").sort().join(""), index: i };
  });
  subArr.sort((a, b) => {
    let fa = a.val.toLowerCase();
    let fb = b.val.toLowerCase();
    if (fa < fb) return -1;
    if (fa > fb) return 1;
    return 0;
  });

  // for (let i = 0; i < subArr.length; i++) {
  //   if(arr[])
  // }
  let abc = [];
  let x = [];
  for (let i = 0; i < subArr.length; i++) {
    let carVal = subArr[i];
    let plusVal = subArr[i + 1];
    if (carVal?.val === plusVal?.val) {
      x.push(arr[carVal.index]);
    } else if (carVal?.val !== plusVal?.val) {
      x.push(arr[carVal.index]);
      abc.push([...x]);
      x = [];
    }
  }
  console.log("abc: ", abc);
  return abc;
};

let arr = ["eat", "tea", "tan", "ate", "nat", "bat", "et", "mnop", "te"];
console.log("------ans------>", fun(arr));
