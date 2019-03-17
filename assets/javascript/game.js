// Band Names

var bandNames = ["caifanes", "cafe-tacvba", "porter", "molotov", "santa-sabina", "jumbo", "fobia", "zurdok", "kinky", "tijuana-no", "la-cuca", "las-ultrasonicas"]

var randomBand = Math.floor(Math.random()*12);
var answRandmBand = bandNames[randomBand];
var myLength = answRandmBand.length;

var display = [myLength];
var win = myLength;
var lettersBand = answRandmBand.split("");
var lives = 10;
var output = "";
//var userLetter = "";


var setup = function () {
    for (var i = 0; i < answRandmBand.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("compBand").innerHTML = output;
    output = "";
    
}

window.onload = function (){
    setup();
} 

// intento de comparacion y key event


document.onkeypress = function() {
var userLetter = event.key.toLowerCase();
//console.log(userLetter, lettersBand);
var index = lettersBand.indexOf(userLetter);
//console.log("index, ",index);

}

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i <lettersBand; i++) {
        if (randomBand[i] === letter) {
            letterInWord = true;
            console.log("otra cosa ", letterInWord)
        }
    }
}
checkLetters();


    /* if (userLetter === index) {
        console.log(userLetter);
    }else {
        console.log("incorrecto");
    } */



