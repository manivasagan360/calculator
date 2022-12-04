/*let num1=Number(prompt("enter first number"));
let operation=prompt("what operation to perform")
let num2=Number(prompt("enter second number"));
console.log(num1+ operation+num2+"=");

function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

function operate(num1, num2, operation) {
    if (operation== "+") {
        return add(num1, num2);    
    }else if (operation=="-") {
        return subtract(num1, num2);    
    }else if (operation=="*") {
        return multiply(num1, num2);
        
    }else if (operation=="/") {
        return divide(num1, num2);
    }    
    
}*/
var buttonlen=document.getElementsByClassName("button").length;
var buttonClick=[];

for (let i = 0; i < buttonlen; i++) {
    document.getElementsByClassName("button")[i].addEventListener("click", function(){
       buttonClick.push(document.getElementsByClassName("button")[i].innerHTML);
    });
    
}

function display() {
    
  

    
}








