var colors=["red","pink","green"]


//push()
//pop()
//unshift()
//shift()
// colors.push("yellow")

// console.log(colors);

// var poped_obj=colors.pop()

// console.log(colors);

// console.log(colors.includes("pink"));

// console.log(colors.includes("blue"));


var arr=[11,20,30,4,12]

var squares=arr.map(num=>num**2)
// console.log(squares);

var cubes=arr.map(num=>num**3)
// console.log(cubes);

var add=arr.map(num=>num+2)
// console.log(add);

var result=arr.map(num=> num>12? num+1: num<12?num-1:num)
console.log(result);

