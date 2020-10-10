//javascript random background color 
const body = document.querySelector('body');
const color1 = ['salmon', 'green', 'aqua', 'violet', 'hotpink', 'red', 'grey', 'darkblue', 'palegoldenrod', 'peru', 'slateblue'];
const color2 = ['darkblue', 'palegoldenrod', 'peru', 'slateblue', 'salmon', 'green', 'aqua', 'violet', 'hotpink', 'red', 'grey'];

var i = color1.index;
var j = color2.index;
i != j;

const colorVar1 = parseInt(Math.random()*color1.length);
const colorVar2 = parseInt(Math.random()*color2.length);
body.style.background = 'linear-gradient(to left,' + color1[colorVar1] + ', ' + color2[colorVar2] + ')';


//selectors
let enterNum = document.querySelector('.enterNum');
let buttons = document.querySelectorAll('.btn')
let enter = document.querySelector('.btn-enter')
let clear = document.querySelector('.btn-clear')
var max = document.querySelector('#max')
var min = document.querySelector('#min')
let display = document.querySelector('#display')

//answer function
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let answer = getRandomInt(101);

//set default min & max value
minNum.value = 0;
maxNum.value = 100;

//hint answer in console
console.log('The answer is ' + answer);


//button functions
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        enterNum.value += value;
        if(enterNum.value > 100){
            enterNum.value = "100";
        } else if(enterNum.value < 0){
            enterNum.value = "0";
        };

    });
    
});

enter.addEventListener('click', function(){
        
    if(enterNum.value == answer){
        enterNum.style.background = 'rgb(0, 179, 24)';
        enterNum.style.color = ' rgb(199, 199, 199)';
        alert('You won! Refresh page to play another one!');
        document.getElementById("display").disabled = true;
        document.getElementById("clr").disabled = true;
        document.getElementById("etr").disabled = true; 
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true; 
        document.getElementById("3").disabled = true; 
        document.getElementById("4").disabled = true; 
        document.getElementById("5").disabled = true; 
        document.getElementById("6").disabled = true; 
        document.getElementById("7").disabled = true; 
        document.getElementById("8").disabled = true; 
        document.getElementById("9").disabled = true; 
        document.getElementById("0").disabled = true;         
    } else if(enterNum.value < answer){
        minNum.value = enterNum.value;
        enterNum.value = "";

    } else if(enterNum.value > answer){
        maxNum.value = enterNum.value;
        enterNum.value = "";        
    }
});

clear.addEventListener('click', function(){
    enterNum.value = "";
});





