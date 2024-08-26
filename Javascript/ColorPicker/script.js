

let stopColorElement=document.getElementById("stopColor");
let readyColorElement=document.getElementById("readyColor");
let goColorElement=document.getElementById("goColor");

let stopButtonElement=document.getElementById("stopButton");
let readyButtonElement=document.getElementById("readyButton");
let goButtonElement=document.getElementById("goButton");


function stopButton(){
    stopColorElement.style.backgroundColor="red";
    stopButtonElement.style.backgroundColor="red";
    readyColorElement.style.backgroundColor="#1f1d41";
    readyButtonElement.style.backgroundColor="#1f1d41";
    goColorElement.style.backgroundColor="#1f1d41";
    goButtonElement.style.backgroundColor="#1f1d41";




}
function readyButton(){
    readyColorElement.style.backgroundColor="orange";
    readyButtonElement.style.backgroundColor="orange";
    stopColorElement.style.backgroundColor="#1f1d41";
    stopButtonElement.style.backgroundColor="#1f1d41";
    goColorElement.style.backgroundColor="#1f1d41";
    goButtonElement.style.backgroundColor="#1f1d41";
   
    

}
function goButton(){
    goColorElement.style.backgroundColor="green";
    goButtonElement.style.backgroundColor="green";
    stopColorElement.style.backgroundColor="#1f1d41";
    stopButtonElement.style.backgroundColor="#1f1d41";
    readyColorElement.style.backgroundColor="#1f1d41";
    readyButtonElement.style.backgroundColor="#1f1d41";
    

}