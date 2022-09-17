const bill = document.getElementById("billVal")          // value of the bill input
const customTip = document.getElementById("customTip")
const people = document.getElementById("people")         // value of the nr of people input
const reset = document.querySelector(".reset-button")     // the reset button
const button = document.querySelectorAll(".btn")
const error = document.getElementById("error")
const defaultButton = document.getElementById("default")
const value1 = document.querySelector(".value1")
const value2 = document.querySelector(".value2")

let billValue = 0;
let personValue = 1;
let tipValue = 0.15;

bill.addEventListener("input", billFunction);

function billFunction(){
        billValue = parseFloat(bill.value);
        calculate()
        console.log(billValue)
}

// function for the buttons 

button.forEach(btn => {
    btn.addEventListener('click',handleClick)
});

function handleClick(event){
    button.forEach(btn => {
        btn.classList.remove("active");
        if(event.target.innerHTML === btn.innerHTML){
            btn.classList.add('active');
            tipValue = parseFloat(btn.innerHTML)/100
            console.log(tipValue);
        }   
    })
    customTip.value=''
    calculate()
}

//function for the custom tip value 

customTip.addEventListener("input",customTipFunct);

function customTipFunct(){
    tipValue = parseFloat(customTip.value/100)
    button.forEach(btn => {
        btn.classList.remove("active");
    })
    if(customTip.value !== 0){
        calculate();
    }
    console.log(tipValue)
}

// function for the number of people 

people.addEventListener("input", peopleVal)

function peopleVal(){
    personValue = parseFloat(people.value)
    if(personValue < 0){
        error.innerHTML = "Number of people can`t be smaller than 0";
        setTimeout(function(){
               error.innerHTML='';
                 },2000)
    } else if (personValue === 0){
        error.innerHTML = "Number of people can`t be equal to 0";
        setTimeout(function(){
               error.innerHTML='';
                 },2000)
    } 
        console.log(personValue)
        calculate()
        
    }

// function to calculate

function calculate(){
    if(personValue >= 1){
        let tip = billValue * tipValue / personValue;
        let totalAmount = billValue * (tipValue + 1) / personValue;
        value1.innerHTML = "$" + tip.toFixed(2);
        value2.innerHTML = "$" + totalAmount.toFixed(2);
    }
}

// function for the reset button

reset.addEventListener("click", resetCalc);

function resetCalc(){
    people.value = 1;
    bill.value = 0.0;
    customTip.value=''
    button.forEach(btn => {
        btn.classList.remove("active");
    })
    defaultButton.classList.add('active');
    value1.innerHTML = "$0";
    value2.innerHTML = "$0";
}