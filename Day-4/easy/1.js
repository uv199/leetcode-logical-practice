`
binary search 
`;
// itretive approach  with loop
const fun = (arr, x) => {
  console.log("arr,x: ", arr, x);
  let max = arr.length - 1;
  let min = 0;
  let position = undefined;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (arr[mid] === x) {
      position = mid;
      break;
    } else if (mid < x) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  console.log("position: ", position);
};

// recursive approach  with loop
const fun2 = (arr, x) => {
  let end = arr.length - 1;
  let start = 0;
  const coFun = (arr, start, end) => {

    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == x) return mid;
    else if (mid > x) return coFun(arr, start, mid - 1);
    else return coFun(arr, mid + 1, end);
  };
  return coFun(arr, start, end) ;
};

let arr = [12];
// let arr = [-1, 0, 3, 4, 5, 9, 12];
let x = 9;

console.log("----->", fun(arr, x));
console.log("----->", fun2(arr, x));
