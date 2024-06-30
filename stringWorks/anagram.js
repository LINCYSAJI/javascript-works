// var word1="silent"

// var word2="listen"

// var sortWord1=word1.split("").sort().join("")

// var sortWord2=word2.split("").sort().join("")

// console.log(sortWord1,sortWord2);

// // if (sortWord1.includes(sortWord2)){

// //     console.log("anagram")
// // }

// // else{
// //     console.log("not anagram");
// // }

// console.log(sortWord1==sortWord2 ? "anagram" : "not anagream");


function isAnagram(word1,word2){

    let sortWord1=word1.split("").sort().join("")

    let sortWord2=word2.split("").sort().join("")

    return sortWord1== sortWord2? "anagram" : "not anagram";
}

console.log(isAnagram("silent","listen"));

