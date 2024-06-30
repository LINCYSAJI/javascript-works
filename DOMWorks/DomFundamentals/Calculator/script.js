
var pointFrequency=1
function displayNumber(event){

       const operators=["+","-","*","/","."]

       let textBox=document.querySelector("#result")

       let currentExp=textBox.value

       let displayNum=event.target.value

       if(displayNum=="." && pointFrequency==1){

            pointFrequency=0
        
       }
        
        else if(displayNum=='.' && pointFrequency==0){

            return
        }

        if(operators.includes(displayNum) && displayNum!='.'){

            pointFrequency=1
        }
       

       let currentExpLastChar=currentExp.slice(-1)

       if (operators.includes(displayNum) && operators.includes(currentExpLastChar)){

        currentExp=currentExp.slice(0,-1)
       }

       textBox.value=currentExp+displayNum

}

function clearBox(){

    document.querySelector("#result").value=""
}

function evaluateExpression(){

    let currentExpression=document.querySelector("#result").value;

    let result=eval(currentExpression)


    

    if(result.toString().split("").includes(".")){

        pointFrequency=0
    }

    else{
        pointFrequency=1
    }

    document.querySelector("#result").value=result

}

function backSpace(){

    let currentExpression=document.querySelector("#result").value;

    let result=currentExpression.slice(0,-1)

    document.querySelector("#result").value=result;
}