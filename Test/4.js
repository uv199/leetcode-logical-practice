`

4. https://www.codechef.com/problems/ATM2

`;
const fun = (arr, money) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > money) arr[i] = 0;
    else {
      money = money - arr[i];
      arr[i] = 1;
    }
  }
  console.log("arr: ", arr.join(' '));
};
// let arr = [3, 5, 3, 2, 1];
let arr = [10, 8, 6, 4];
let x = 6
console.log("------ans------>", fun(arr, x));


