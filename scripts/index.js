// Declare global variables
var buttonRow = document.getElementById('container')
var operand1 = document.getElementById('operand1')
var operand2 = document.getElementById('operand2')

var operationsButtons = []

var equation = "";


// Create calculator buttons and push to buttonList[]

for (var i = 0; i < 18; i++) {
    var id = "";

      switch (i){
        case 0:
            $(buttonRow).append(`<div class="button data__operator span__two" id="clear">AC</div>`);
            id = "clear";
            break;
        case 1:
            $(buttonRow).append(`<div class="button data__operator" id="del">DEL</div>`);
            id = "del";
            break;
        case 2:
            $(buttonRow).append(`<div class="button data__operator" id="÷">÷</div>`);
            id = "\b";
            break; 
        case 3:
            $(buttonRow).append(`<div class="button data__number" id="1">1</div>`);
            id = "1";
            break;
        case 4:
            $(buttonRow).append(`<div class="button data__number" id="2">2</div>`);
            id = "2";
            break;
        case 5:
            $(buttonRow).append(`<div class="button data__number" id="3">3</div>`);
            id = "3";
            break;
        case 6:
            $(buttonRow).append(`<div class="button data__operator" id="*">*</div>`);
            id = "*";
            break;
        case 7:
            $(buttonRow).append(`<div class="button data__number" id="4">4</div>`);
            id = "4";
            break;
        case 8:
            $(buttonRow).append(`<div class="button data__number" id="5">5</div>`);
            id = "5";
            break;
        case 9:
            $(buttonRow).append(`<div class="button data__number" id="6">6</div>`);
            id = "6";
            break;
        case 10:
            $(buttonRow).append(`<div class="button data__operator" id="+">+</div>`);
            id = "+";
            break;
        case 11:
            $(buttonRow).append(`<div class="button data__number" id="7">7</div>`);
            id = "7";
            break;
        case 12:
            $(buttonRow).append(`<div class="button data__number" id="8">8</div>`);
            id = "8";
            break;
        case 13:
            $(buttonRow).append(`<div class="button data__number" id="9">9</div>`);
            id = "9";
            break;
        case 14:
            $(buttonRow).append(`<div class="button data__operator" id="-">-</div>`);
            id = "-";
            break;
        case 15:
            $(buttonRow).append(`<div class="button data__number" id=".">.</div>`);
            id = ".";
            break;
        case 16:
            $(buttonRow).append(`<div class="button data__number" id="0">0</div>`);
            id = "0";
            break;
        case 17:
            $(buttonRow).append(`<div class="button data__operator" id="=">=</div>`);
            id = "=";
            break;

    }    
}

// BREAK OUT THE OPERATORS
operationsButtons = document.querySelectorAll(".data__operator");
var ids = []

operationsButtons.forEach(element => {
    ids.push(element.id)
});

var flag = false;
// Add EventListener to the document
document.addEventListener('click',function(e){   
    
    

    if(ids.includes(e.target.id,0)) {

        var myValue = e.target.id.toString() === "÷" ? "/" : e.target.id.toString();        
        if(e.target.id === "="){
            var myTotal = computeResults(equation);
            operand2.innerHTML += "=";
            operand1.innerHTML = myTotal;
        }  
        else if(e.target.id === "clear"){
            clear();
            return;
        }
        else if(e.target.id === "del"){            
           equation = equation.slice(0, equation.length - 1);
           if(ids.includes(equation.slice(-1))){
            equation = equation.slice(0, equation.length - 1);
           }           
            operand2.innerHTML = equation;
            operand1.innerHTML = equation.slice(-1);
            return;
        }
        equation += myValue;
        flag = true;

    }
    else{
        if(operand1.innerHTML === ""){
            e.target.id != "container" ? operand1.innerHTML += e.target.id : operand1.innerHTML = operand1.innerHTML;
            e.target.id != "container" ? equation += e.target.id.toString() : equation = equation;
        }
        else{
            
            if(e.target.id !== "container"){
                flag === true ? operand1.innerHTML = e.target.id : operand1.innerHTML += e.target.id;
                equation += e.target.id.toString();
                operand2.innerHTML = equation;
            }
            
        }
    }
   
 });

 function computeResults(e){
    return Function(`'use strict'; return(${e})`)();
 }

 function clear(){
    operand1.innerHTML = "";
    operand2.innerHTML = "";
    equation = ""

 }

 


    
    


