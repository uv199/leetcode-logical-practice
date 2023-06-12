



const fun = (num,car)=>  [...Array(num+1).keys()].toString().replace(eval("/[^"+car+"]/g"), "").length




console.log(fun(8000,1))