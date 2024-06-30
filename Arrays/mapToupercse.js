var arr=["program","project","profile","profession","python"]

var upperCaseString=arr.map(w=>w.toUpperCase())

// console.log(upperCaseString);

var lengthOfString=arr.map(w=>w.length)
// console.log(lengthOfString);

var startWithPro=arr.filter(w=>w.startsWith("pro"))
// console.log(startWithPro);

var longestWord=arr.reduce((w1,w2)=>w1.length>w2.length?w1:w2)
// console.log(longestWord);

var shortWord=arr.reduce((w1,w2)=>w1.length<w2.length?w1:w2)

// console.log(shortWord);

var sortDescWord=arr.sort((w1,w2)=>w2.length-w1.length)

console.log(sortDescWord);