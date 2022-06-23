
document.addEventListener("DOMContentLoaded", startScreen());
var gameHasStarted = false;


/* Test story*/
const myStory = [{
    "first" : "It was dark and lonely night",
    "second" : "This too is a sentence"
}]


/* Need to figure out here how to remove start button after StartTheGame function has started*/
function startScreen() {
    let buttonBox = document.getElementById("button-box");
    let startBtn = document.createElement("button");
    buttonBox.appendChild(startBtn);
    startBtn.innerHTML = "Start the story";
    console.log("Hi from startBtn");
    startBtn.addEventListener('click', startTheGame)
    if (gameHasStarted === true) {
        buttonBox.removeChild(startBtn);
    }

}

function startTheGame() {
    gameHasStarted = true;
    console.log("Game has started");
    let buttonBox = document.getElementById("button-box");
    let button = buttonBox[0];
    console.log(button);
    buttonBox.removeChildren();
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    btn1.innerHTML = "This way";
    btn2.innerHTML = "That way";
    buttonBox.appendChild(btn1);
    buttonBox.appendChild(btn2);
    console.log(buttonBox.children);

    let gameScreen = document.getElementById("game-screen");
    let storyBox = document.createElement('div');
    gameScreen.appendChild(storyBox);
    let text = document.getElementsByName(myStory);

    console.log(text.first);
}

function changePage(){

}