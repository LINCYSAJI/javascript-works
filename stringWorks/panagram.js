var text="The quick brown fox jumps over the lazy dog".toLowerCase()

var alphabets="abcdefghijklmnopqrstuvwxyz".toLowerCase()

var isPanagram=true;

for (let ch of alphabets){

    if (!text.includes(ch)){

        isPanagram=false;

        break
    }
}

console.log(isPanagram);