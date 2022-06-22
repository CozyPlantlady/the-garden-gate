
document.addEventListener("DOMContentLoaded", function() {
var buttonBox = document.getElementById("button-box");

for (let startBtn = document.createElement("button")){
    startBtn.setAttribute('onclick', 'startTheGame()');
    startBtn.innerHTML = "Start the story";
    buttonBox.appendChild(startBtn);  
}


})


function startTheGame() {
    let buttonBox = document.getElementById("button-box");
    let startBtn = document.getElementsByName("startBtn");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    btn1.innerHTML = "This way";
    btn2.innerHTML = "That way";
    buttonBox.appendChild(btn1);
    buttonBox.appendChild(btn2);

    var storyBox = document.getElementById("story");

    /** From here the story pages should go to json-file */
let page1 = document.createElement("div");
page1.innerHTML = "You are dead. Very, very dead."
}