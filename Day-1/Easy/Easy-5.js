`
link = https://leetcode.com/problems/plus-one/
`;

const fun = (a) => {
  a.reverse();
  for (let i = 0; i < a.length; i++) {
    if (a[i] == 9 ||a[i] == 10 ) {
      a[i] = 0;
      a[i+1]+=1 
      
    } else if (a[i] != 9) {
      a[i] += 1;
      break;
    } 
  }
};

let abc = [ 5, 5, 9, 9];
// Output: [1,2,4]  [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
console.log(fun(abc));

// take help accept in leet code
