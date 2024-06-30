var color=["red","yellow","green"]

var clrCpy=[...color] //spread operator

clrCpy.pop()

// console.log(clrCpy);

// console.log(color);

var user={name:"dia",email:"dia@gmail.com",password:"diapass",isActive:true}

var userCopy={...user}

userCopy.isActive=false

// console.log(user);

// console.log(userCopy);

var product={id:11,name:"m32",brand:"samsung",price:12000,isAvailable:false}

var productCopy={...product,isAvailable:true}

console.log(productCopy);