
document.addEventListener("DOMContentLoaded", startScreen());
var gameHasStarted = false;
let buttonBox = document.getElementById("button-box");

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
    const myButtons = {
        option0 : "Nothing here",
        option1 : "Go fish",
        option2 : "Go home"
    }
    let btn1 = document.getElementById("btn1");
    btn1.classList.remove("hidden");
    btn1.classList.add("visible");
    let btn1NextText = myButtons;
    btn1.textContent = btn1NextText.option0;
}
function btnTwoText(){
    const myButtons = {
        option0 : "It's empty",
        option1 : "I want to go home",
        option2 : "That's weird"
    }
    let btn2 = document.getElementById("btn2");
    btn2.classList.remove("hidden");
    btn2.classList.add("visible");
    let btn2NextText = myButtons;
    btn2.textContent = btn2NextText.option0;
}

 function storyBox(){
    let gameScreen = document.getElementById("game-screen");
    let storyBox = document.getElementById("story");
    gameScreen.appendChild(storyBox);
    function changePage(){
        const myStory = {
            page0 : "And so our story begins",
            page1 : "It was dark and lonely night",
            page2 : "This too is a sentence"
        }
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

