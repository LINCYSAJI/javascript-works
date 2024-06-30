var arr=[1,2,3,4,5]

var total=arr.reduce((n1,n2)=>n1+n2)
// console.log(total);

var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);
var min=arr.reduce((n1,n2)=>n1<n2? n1:n2)
// console.log(min);

var product=arr.reduce((n1,n2)=>n1*n2)
console.log(product);