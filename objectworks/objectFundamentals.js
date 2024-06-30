var student={
    name:"vipin",
    course:"django",
    degree:"bca",
    total:50,
    points:10
}

//console.log(student.name);

//console.log(student.degree);

// student.grade="a+"

// console.log(student);

// if ("total" in student){

//     console.log("present");

// }

// else{

//     console.log("not present");
// }

//if points exist add 10 with current points else add points as 15

if ("points" in student){

    student.points+=10
}

else{
    student.points=15
}

console.log(student);