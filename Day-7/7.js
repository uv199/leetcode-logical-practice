`
4. gfg(e)
https://practice.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1?page=1&curated[]=1&sortBy=submissions
`;
let fun = (arr) => {
  const coFun = (a, s, e) => {
    if (e <= s) return 0;
    let profit = 0;
    for (let i = s; i < e; i++) {
      for (let j = i + 1; j <= e; j++) {
        if (a[j] > a[i]) {
          let curr_profit =
            a[j] - a[i] + coFun(a, s, i - 1) + coFun(a, j + 1, e);
          profit = Math.max(profit, curr_profit);
        }
      }
    }
    return profit;
  };
  let abc = coFun(arr, 0, arr.length - 1);
  if (abc > 0) return 1;
  return -1;
};

let arr = [100, 180, 260, 310, 40, 535, 695];
console.log("-------> ", fun(arr));
