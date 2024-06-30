var weightInKg=75;

var heightInCm=165;

var heightInMeter=heightInCm/100

var bmi=Math.round((weightInKg/(heightInMeter**2)))

console.log(bmi);

if (bmi<19){
    console.log("underweight");
}

else if(bmi<=25){

    console.log("Normal");
}

else if(bmi<=30){

    console.log("OverWeight");
}

else if(bmi>30){
    console.log("obese");
}