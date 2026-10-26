const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

const input1Indicator = document.getElementById('input1Indicator')
const input2Indicator = document.getElementById('input2Indicator')
const btn1Indicator = document.getElementById('btn1Indicator')
const btn2Indicator = document.getElementById('btn2Indicator')

const txt1 = document.getElementById('txt1')

//input 1
input1.addEventListener(
    'change', function(){
        input1Indicator.innerHTML = "input 1 Changed"
    }
)

input1.addEventListener(
    'focus', function(){
        input1Indicator.innerHTML = "input 1 on focus"
    }
)

input1.addEventListener(
    'blur', function(){
        input1Indicator.innerHTML = "left input 1(blur)"
    }
)

input1.addEventListener(
    'input', function(){
        input1Indicator.innerHTML = "typing on input 1: " + input1.value 
    }
)


//input 2
input2.addEventListener(
    'change', function(){
        input2Indicator.innerHTML = "input 2 Changed"
    }
)

input2.addEventListener(
    'focus', function(){
        input2Indicator.innerHTML = "input 2 on focus"
    }
)

input2.addEventListener(
    'blur', function(){
        input2Indicator.innerHTML = "left input 2(blur)"
    }
)

input2.addEventListener(
    'input', function(){
        input2Indicator.innerHTML = "typing on input 2: " + input2.value 
    }
)


//button 1
btn1.addEventListener(
    "click", function(){
        btn1Indicator.innerHTML = "Button 1 Clicked"
    }
)

btn1.addEventListener(
    "dblclick", function(){
        btn1Indicator.innerHTML = "Button 1 Double Clicked"
    }
)

btn1.addEventListener(
    "mouseover", function(){
        btn1Indicator.innerHTML = "mouse on button 1"
    }
)

btn1.addEventListener(
    "mouseout", function(){
        btn1Indicator.innerHTML = "mouse left button 1"
    }
)


//button 2
btn2.addEventListener(
    "click", function(){
        btn2Indicator.innerHTML = "Button 2 Clicked"
    }
)

btn2.addEventListener(
    "dblclick", function(){
        btn2Indicator.innerHTML = "Button 2 Double Clicked"
    }
)

btn2.addEventListener(
    "mouseover", function(){
        btn2Indicator.innerHTML = "mouse on button 2"
    }
)

btn2.addEventListener(
    "mouseout", function(){
        btn2Indicator.innerHTML = "mouse left button 2"
    }
)


let i = 0
btn3.addEventListener(
    "click", function(){

        if(i == 0){
            txt1.style.color = 'red'
            i = 1
        }else {
            txt1.style.color = 'blue'
            i = 0
        }
    }
)

btn4.addEventListener(
    "click", function(){
        document.body.style.backgroundColor = 'cyan'
    }
)