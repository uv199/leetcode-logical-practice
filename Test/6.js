`

6. https://practice.geeksforgeeks.org/problems/product-array-puzzle4525/1?page=2&company[]=Morgan%20Stanley&company[]=Intuit&company[]=Directi&sortBy=submissions


`;
const fun = (arr) => {
  let abc = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum = sum * arr[j];
      }
    }
    // console.log("sum: ", sum);
    abc.push(sum);
  }
  return abc
};

let arr = [10, 3, 5, 6, 2];
console.log("------ans------>", fun(arr));
