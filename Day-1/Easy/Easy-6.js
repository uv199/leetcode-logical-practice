`
https://leetcode.com/problems/search-insert-position/
`;

var searchInsert = function (arr, x) {
  if (arr.indexOf(x)!==-1) return arr.indexOf(x);
  else {
    if (arr[arr.length - 1] < x) return arr.length;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      console.log('element>x: ', element,x,element>x);
      if(element>x) return i
    }
  }
};

let arr = [1,3,5,6];
let x = 2;

console.log("------->",searchInsert(arr, x));


// accept in leet code
