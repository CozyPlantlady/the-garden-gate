
document.addEventListener("DOMContentLoaded", startScreen());
var gameHasStarted = false;
let buttonBox = document.getElementById("button-box");


/* Test story*/

const myButtons = [{
    option0 : "Nothing here",
    option1 : "Go fish",
    option2 : "Go home"
}]

/* Need to figure out here how to remove start button after StartTheGame function has started*/
function startScreen() {
    let startBtn = document.getElementById("start-button");
    startBtn.innerHTML = "Start the story";
    console.log("Hi from startBtn");
    startBtn.addEventListener('click', startTheGame);
}
/**This function uses the other functions to start the game. 
 * It also hides the start button */
function startTheGame() {
    gameHasStarted = true;
    let startBtn = document.getElementById("start-button");
    startBtn.classList.add("hidden");
    console.log("Game has started");
    btnOneText();
    btnTwoText();
    storyBox();
}



function btnOneText(){
    const myButtons = [{
        option0 : "Nothing here",
        option1 : "Go fish",
        option2 : "Go home"
    }]
    let btn1 = document.createElement("button");
    let btn1NextText = myButtons.option0;
    btn1.innertext = btn1NextText;
    buttonBox.appendChild(btn1);;
}
function btnTwoText(){
    let btn2 = document.createElement("button");
    btn2.innerHTML = "That way";
    buttonBox.appendChild(btn2);
}

 function storyBox(){
    let gameScreen = document.getElementById("game-screen");
    let storyBox = document.getElementById("story");
    gameScreen.appendChild(storyBox);
    function changePage(){
        const myStory = [{
            page0 : "And so our story begins",
            page1 : "It was dark and lonely night",
            page2 : "This too is a sentence"
        }]
        let page;
        let pageNumber = 0;/* What user chooses , fix that*/
        switch (pageNumber) {
            case 0:
                page = "myStory: page0";
                console.log(page);
                break;
    
            case 1:
                page = document.getElementsByTagName("myStory").innerText;
            default: 
            page = "This didn't work. It's not you, it's the code."
                break;
        }
    
    }
}

