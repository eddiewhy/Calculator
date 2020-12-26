//divide = \u00F7
//multiply = \u00D7
//subtract = \u2212
//add = \u002B
//equals = \u003D

let complete = false;
var numb = 0;
var numbx = 0;
var arithmatic = 0;
var finalAnswer = 0;

function punch(number) {
    console.log(number);
    document.getElementById("final").innerHTML = number;
    numb = number;
}

function punchx(number) {
    console.log(numb + " " + arithmatic + " " + number);
    document.getElementById("final").innerHTML = numb + " " + arithmatic + " " + number;
    numbx = number;
}

function equals() {
    if (arithmatic == "\u00f7") {
            finalAnswer = numb / numbx;
            if (finalAnswer / finalAnswer != 1) {
                console.log("Fuck off!");
                document.getElementById("final").innerHTML = "Fuck off!"
            } else {
                console.log(finalAnswer);
                document.getElementById("final").innerHTML = numb + " " + arithmatic + " " + numbx + " \u003D" + " " + finalAnswer; 
            }
    } else if (arithmatic == "\u00D7") {
        finalAnswer = numb * numbx;
        console.log(finalAnswer);
        document.getElementById("final").innerHTML = numb + " " + arithmatic + " " + numbx + " \u003D" + " " + finalAnswer; 
    } else if (arithmatic == "\u2212") {
        finalAnswer = numb - numbx;
        console.log(finalAnswer);
        document.getElementById("final").innerHTML = numb + " " + arithmatic + " " + numbx + " \u003D" + " " + finalAnswer; 
    } else if (arithmatic == "\u002B") {
        finalAnswer = numb + numbx;
        console.log(finalAnswer);
        document.getElementById("final").innerHTML = numb + " " + arithmatic + " " + numbx + " \u003D" + " " + finalAnswer; 
    }
}
    
function reset() {
    document.getElementById("final").innerHTML = "0";
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

function divide() {
    console.log(numb + " " + "\u00f7");
    document.getElementById("final").innerHTML = numb + " " + "\u00f7";
    arithmatic = "\u00f7";
}
function multiply() {
    console.log(numb + " " + "\u00D7");
    document.getElementById("final").innerHTML = numb + " " + "\u00D7";
    arithmatic = "\u00D7";
}
function subtract() {
    console.log(numb + " " + "\u2212");
    document.getElementById("final").innerHTML = numb + " " + "\u2212";
    arithmatic = "\u2212";
}
function add() {
    console.log(numb + " " + "\u002B");
    document.getElementById("final").innerHTML = numb + " " + "\u002B";
    arithmatic = "\u002B";
}