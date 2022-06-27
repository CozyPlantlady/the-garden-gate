document.addEventListener("DOMContentLoaded", startScreen());
let pageNumber = 0;
console.log("This is page number " + pageNumber);

/** Start button is visible only when the game is not started */
function startScreen() {
    let startBtn = document.getElementById("start-button");
    startBtn.innerHTML = "Start the story";
    console.log("Hi from startBtn");
    startBtn.addEventListener('click', startTheGame);
}
/**This function uses the other functions to start the game. 
 * It also hides the start button */
function startTheGame() {
    let startBtn = document.getElementById("start-button");
    startBtn.classList.add("hidden");
    console.log("Game has started");
    btnOneText();
    btnTwoText();
    changePage();
}

function btnOneText(){
    const myButtons = {
        option0 : "Nothing here",
        option1 : "Go fish",
        option2 : "Go home"
    }
    let btn1NextText = myButtons;
    let btn1 = document.getElementById("btn1");
    btn1.classList.remove("hidden");
    btn1.classList.add("visible");
    switch (pageNumber) {
        case 0:
            btn1.textContent = btn1NextText.option0; 
            break;
        case 1:
            btn1.textContent = btn1NextText.option1; 
            break;
        case 2:
            btn1.textContent = btn1NextText.option2; 
            break;
        default:
            btn1.textContent = "This didn't work. It's not you, it's the code.";
            break;
    }
}
function btnTwoText(){
    const myButtons = {
        option0 : "It looks like it might rain",
        option1 : "I need an umbrella",
        option2 : "I'm homesick"
    }
    let btn2NextText = myButtons;
        let btn2 = document.getElementById("btn2");
        btn2.classList.remove("hidden");
        btn2.classList.add("visible");
        switch (pageNumber) {
            case 0:
                btn2.textContent = btn2NextText.option0; 
                break;
            case 1:
                btn2.textContent = btn2NextText.option1; 
                break;
            case 2:
                btn2.textContent = btn2NextText.option2; 
                break;
            default:
                btn2.textContent = "This didn't work. How weird is that.";
                break;
        }
    }


function changePage(){
    let storyBox = document.getElementById("story");
    const myStory = {
        page0 : "And so our story begins",
        page1 : "It was dark and lonely night",
        page2 : "This too is a sentence"
    }
    let page;
    let pageNumber = 0;/* What user chooses , fix that*/
    switch (pageNumber) {
        case 0:
            storyBox.innerHTML = myStory.page0; 
            console.log(page);
            break;
        case 1:
            page = document.getElementsByTagName("myStory").innerText;
        default: 
        page = "This didn't work. It's not you, it's the code."
            break;
    }
}


