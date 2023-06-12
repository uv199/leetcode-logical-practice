`
7. https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1?page=1&company[]=Flipkart&curated[]=1&sortBy=submissions


`;
const fun = (arr) => {
  let x = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) x++;
    }
  }
  return x;
};

// let arr = [2, 4, 1, 3, 5];
let arr = [2, 2, 2];
console.log("------ans------>", fun(arr));
