
document.addEventListener("DOMContentLoaded", startScreen());
var gameHasStarted = false;


/* Test story*/
const myStory = [{
    first : ["It was dark and lonely night" , "Go forward" , "Go backward"],
    second : ["This too is a sentence" , "Go forward" , "Go backward"]
}]


/* Need to figure out here how to remove start button after StartTheGame function has started*/
function startScreen() {
    let startBtn = document.getElementById("start-button");
    startBtn.innerHTML = "Start the story";
    console.log("Hi from startBtn");
    startBtn.addEventListener('click', startTheGame);
}

function startTheGame() {
    gameHasStarted = true;
    let startBtn = document.getElementById("start-button");
    startBtn.classList.add("hidden");
    console.log("Game has started");
    let buttonBox = document.getElementById("button-box");
    console.log("buttonBox");
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