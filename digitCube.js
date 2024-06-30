var number=1634;

var sum=0;

var temp=number;

var number_count=String(number).length;

while (number!=0){

    let digit=number%10;

     let cube=digit**number_count;

    sum=sum+cube;

    number=Math.floor(number/10);
}

console.log(sum);

console.log(temp==sum ? "armstrong": "not armstrong");