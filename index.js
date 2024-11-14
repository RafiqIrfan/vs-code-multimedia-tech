//document.getElementBYId("count-el").innetText=115;

let count=0;
let countEl= document.getElementById("count-el");
let welcomeEl= document.getElementById("welcome-el");
let saveEl= document.getElementById("save-el");

function increment(){
    count=count+1;
    countEl.innerText=count;
}
function save(){
    let countStr = count + "-";
    let message=document.getElementById("message-el")
    message.textContent += countStr;
    count=0;
    countEl.innerText=count;
}