document.addEventListener("DOMContentLoaded", startScreen());

/** Start button is visible only when the game is not started */
function startScreen() {
    let startBtn = document.getElementById("start-button");
    startBtn.innerHTML = "Start the story";
    console.log("Hi from startBtn");
    startBtn.addEventListener('click', startTheGame);
    btnOneText();
    btnTwoText();
    let pageNumber = 0;
    document.getElementById("page-number").innerHTML = pageNumber;
    console.log("This is page number " + pageNumber);

}

    /**This function uses the other functions to start the game. 
     * It also hides the start button */
function startTheGame() {
    let startBtn = document.getElementById("start-button");
    startBtn.classList.add("hidden");
    console.log("Game has started");
    btn1.classList.remove("hidden");
    btn1.classList.add("visible");
    btn2.classList.remove("hidden");
    btn2.classList.add("visible");
    btn1.addEventListener('click', btnOneText)
    btn2.addEventListener('click', btnTwoText);

    changePage();
}
/*This function changes the text of left button */
function btnOneText(){
    const myButtons1 = {
        option0 : "Nothing here",
        option1 : "Go fish",
        option2 : "Go home"
    }
    let btn1NextText = myButtons1;
    let btn1 = document.getElementById("btn1");
    switch (pageNumber) {
        case 0:
            btn1.textContent = btn1NextText.option0; 
            pageNumber = 1;
            break;
        case 1:
            btn1.textContent = btn1NextText.option1; 
            pageNumber = 2;
            break;
        case 2:
            btn1.textContent = btn1NextText.option2; 
            pageNumber = 3;
            break;
        default:
            btn1.textContent = "This didn't work. It's not you, it's the code.";
    }
}

    /*This function changes the text of the right button */
function btnTwoText(){
    const myButtons2 = {
        option0 : "It looks like it might rain",
        option1 : "I need an umbrella",
        option2 : "I'm homesick"
    }
    let btn2NextText = myButtons2;
    let btn2 = document.getElementById("btn2");
    switch (pageNumber) {
        case 0:
            btn2.textContent = btn2NextText.option0; 
            pageNumber = 4;
            break;
        case 1:
            btn2.textContent = btn2NextText.option1; 
            pageNumber = 5;
            break;
        case 2:
            btn2.textContent = btn2NextText.option2; 
            pageNumber = 6;
            break;
        default:
            btn2.textContent = "This didn't work. How weird is that.";
    }
}
    
    /*This function moves story to the next chosen page*/
function changePage(){
    let storyBox = document.getElementById("story");
    const myStory = {
        page0 : "And so our story begins",
        page1 : "It was dark and lonely night",
        page2 : "This too is a sentence",
        page3 : "This is page 3",
        page4 : "This is page 4",
        page5 : "This is page 5",
        page6 : "This is page 6"
    }
    switch (pageNumber) {
        case 0:
            storyBox.innerHTML = myStory.page0; 
            console.log("Beginning");
            break;
        case 1:
            storyBox.innerHTML = myStory.page1;
            console.log("page 1");
            break;
        case 2:
            storyBox.innerHTML = myStory.page2;
            console.log("page 2");
            break;
        case 3:
            storyBox.innerHTML = myStory.page3;
            console.log("page 3");
            break;
        case 4:
            storyBox.innerHTML = myStory.page4;
            console.log("page 4");
            break;
        case 5:
            storyBox.innerHTML = myStory.page5;
            console.log("page 5");
            break;
        default: 
            storyBox.innerHTML = "This didn't work. It's not you, it's the code."
            console.log("Oops");
    }
}