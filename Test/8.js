`

8. https://leetcode.com/problems/apply-discount-every-n-orders/


`;

var Cashier = function (n, discount, products, prices) {
  this.price = {};
  for (let i = 0; i < products.length; i++) {
    this.price[products[i]] = prices[i];
  }
  this.n = n;
  this.discount = discount/100;
  this.count = 0;
};
Cashier.prototype.getBill = function (product, amount) {
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    total += this.price[product[i]] * amount[i];
  }
  this.count++
  if( this.count%this.n===0) return total-(total*this.discount)
  return total

};

Cashier.prototype.getBill = function (product, amount) {};
console.log("------ans------>", fun(arr));
