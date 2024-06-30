var text="javascript"

var vowelCount=0;
var consCount=0;
var vowels="aeiou"
for (let ch of text){

    if (vowels.includes(ch)){

        vowelCount+=1
    }

    else{
        consCount+=1
    }
}
console.log("vowel count",vowelCount);
console.log("consonant count",consCount);
console.log("total count",text.length);