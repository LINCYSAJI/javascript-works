setTimeout(()=>{

    console.log("line1");
},2000)

console.log("line2");

setTimeout(()=>{
    console.log("line 3");
},0)

console.log("line4");

setTimeout(()=>{
    console.log("line5");
},1000)