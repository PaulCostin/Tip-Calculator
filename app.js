const bill = document.getElementById("billVal")          // value of the bill input
const custom = document.getElementById("customTip")
const people = document.getElementById("people")         // value of the nr of people input
const reset = document.querySelector(".reset-button")     // the reset button
const button = document.querySelectorAll(".btn")
const error = document.getElementById("error")
const defaultButton = document.getElementById("default")


// function for the buttons 

button.forEach(btn => {
    btn.addEventListener('click',handleClick)
});

function handleClick(event){
    button.forEach(btn => {
        btn.classList.remove("active");
        if(event.target.innerHTML === btn.innerHTML){
            btn.classList.add('active');
        }
    })
    customTip.value=''
}

//function for the custom tip value 

custom.addEventListener("input",customTipFunct)

function customTipFunct(){
    button.forEach(btn => {
        btn.classList.remove("active")
    })
    if(button.value !== 0){
        calculate();
    }
}

// function for the number of people 

people.addEventListener("input", peopleVal)

function peopleVal(){
    if(people.value < 0){
        error.innerHTML = "Number of people can`t be smaller than 0";
        setTimeout(function(){
               error.innerHTML='';
                 },2000)
    } else if (people.value == 0){
        error.innerHTML = "Number of people can`t be equal to 0";
        setTimeout(function(){
               error.innerHTML='';
                 },2000)
    } else if (people.value > 0){
        calculate();
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
}