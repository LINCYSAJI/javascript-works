var arr=[10,20,30,40]

var k=2

for(let i=1;i<=k;i++){
    let poped_elemnt=arr.pop()
    
    arr.unshift(poped_elemnt)
}
console.log(arr);