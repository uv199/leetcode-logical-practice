`
https://leetcode.com/problems/3sum-closest/

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
`;
const fun = (num, x) => {
  let arr = [];
  let con = true;

  for (let i = 0; i < num.length - 2 && con; i++) {
    for (let j = i + 1; j < num.length; j++) {
      for (let k = j + 1; k < num.length; k++) {
        const sum = num[i] + num[j] + num[k];
        arr.push(sum);
        if (sum === x) {
          con = false;
          return sum;
        }
      }
    }
  }
  for (let i = 0; con; i++) {
    if (arr.includes(x)) return x;
    if (arr.includes(x - i)) return x - i;
    else if (arr.includes(x + i)) return x + i;
  }
};

// console.log( i ,'-', j ,'-', j+1);
// console.log( num[i] ,'+', num[j] ,'+', num[j+1], '==' ,sum);

// 	let arr = [ -1, 2, 1, -4 ];
// 	let x = 1;
// let num = [0,3,97,102,200]; //exp = 300
// let x = 300;
// let num = [1,1,1,0];
// let x = -100;
// let num = [4,0,5,-5,3,3,0,-4,-5];
// let x = -2;
// let num = [-1,2,1,-4]; // exp = 0
// let x = 1;
let num = [
  833, 736, 953, -584, -448, 207, 128, -445, 126, 248, 871, 860, 333, -899, 463,
  488, -50, -331, 903, 575, 265, 162, -733, 648, 678, 549, 579, -172, -897, 562,
  -503, -508, 858, 259, -347, -162, -505, -694, 300, -40, -147, 383, -221, -28,
  -699, 36, -229, 960, 317, -585, 879, 406, 2, 409, -393, -934, 67, 71, -312,
  787, 161, 514, 865, 60, 555, 843, -725, -966, -352, 862, 821, 803, -835, -635,
  476, -704, -78, 393, 212, 767, -833, 543, 923, -993, 274, -839, 389, 447, 741,
  999, -87, 599, -349, -515, -553, -14, -421, -294, -204, -713, 497, 168, 337,
  -345, -948, 145, 625, 901, 34, -306, -546, -536, 332, -467, -729, 229, -170,
  -915, 407, 450, 159, -385, 163, -420, 58, 869, 308, -494, 367, -33, 205, -823,
  -869, 478, -238, -375, 352, 113, -741, -970, -990, 802, -173, -977, 464, -801,
  -408, -77, 694, -58, -796, -599, -918, 643, -651, -555, 864, -274, 534, 211,
  -910, 815, -102, 24, -461, -146,
]; // exp = 0
let x = -7111;
console.log("------ans------>", fun(num, x));

// note works in long array
