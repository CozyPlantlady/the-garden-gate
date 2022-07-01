document.addEventListener("DOMContentLoaded", gameFile());

/*HTML elements*/
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const storyBox = document.querySelector('#story');
const startBtn = document.querySelector('#start-button');
let replay = 0;

let playerName = document.querySelector('#player-name').value;
console.log(playerName);


/*options for button 1 */
const myButtons1 = {
    option0 : "Go to page 3",
    option1 : "Go to page 5", 
    option2 : "Go to page 7",
    option3 : "Go to page 9",
    option4 : "Go to page 11", 
    option5 : "Go to page 13"
    };

/*options for button 2*/ 
const myButtons2 = {
    option0 : "Go to page 4",
    option1 : "go to page 6",
    option2 : "go to page 8",
    option3 : "go to page 10",
    option4 : "go to page 12",
    option5 : "go to page 14"
};

/*story pages */
const myStory = {
    page0 : `And so our story begins. Welcome, ${playerName}.`,
    page1 : "It was dark and lonely night at page 1.",
    page2 : "This too is a sentence on page 2.",
    page3 : "This is page 3",
    page4 : "This is page 4",
    page5 : "This is page 5",
    page6 : "This is page 6",
    page7 : "This is page 7. The End.",
    page8 : "This is page 8. The End.",
    page9 : "This is page 9. The End.",
    page10 : "This is page 10. The End.",
    page11 : "This is page 11. The End.",
    page12 : "This is page 12. The End.",
    page13 : "This is page 13. The End.",
    page14 : "This is page 14. The End."
};

/**This function holds everything else inside of it. This is hopefully giving some structure. */
function gameFile(){
    console.log("Game loading...");
    let pageNumber = document.querySelector('#page-number');
    pageNumber.classList.add("hidden");
    pageNumber = 0;
    let replay = document.querySelector("#replay-number");
    replay= 0;
    startScreen();

    /**Create also a replayCounter when the other one works */
    /**Most important function. It receives and updates the page number */

    function pageCounter(bob){
        let gamePage = `${bob}`;
        pageNumber.textContent = gamePage;
        console.log("This is from counter: " +"Page Number" + pageNumber);
        document.querySelector("#page-number").innerText = pageNumber;

        return pageNumber;
    }

    function replayTest(john){
        let howManyTimesPlayed = `${john}`;
        Number.howManyTimesPlayed;
        replay.textContent = howManyTimesPlayed;
        document.querySelector("#replay-number").innerText = howManyTimesPlayed;
        console.log("This is from counter: " + "replay " + replay);
        return replay;

    }
    
    /** Start button is visible only when the game is not started.
     * pageCounter sets the starting point */
    function startScreen() {
        const startBtn = document.querySelector('#start-button');
        pageNumber = 0;
        pageCounter(pageNumber);

        if (replay === 0){
            startBtn.innerHTML = "Start the story";
        } else {
            startBtn.innerHTML = "Play again?";
        }
        startBtn.addEventListener('click', startGame);
        
    }


    /**This function uses the other functions to start the game. 
    * Hide start button and make option buttons visible.
    * Holds default text that goes inside button 1 and button 2 in start*/
    function startGame() {
        startBtn.classList.remove("visible");
        startBtn.classList.add("hidden");
        btn1.classList.remove("hidden");
        btn1.classList.add("visible");
        btn2.classList.remove("hidden");
        btn2.classList.add("visible");
        btn1.textContent = "Go to page 1";
        btn2.textContent = "Go to page 2";
        console.log("Game has started");
        changePage();

        let buttonOption = Array.from(document.querySelectorAll('.option'));
        buttonOption.forEach(button => {
            if(!button)return;
            button.id === "btn1" ? button.addEventListener("click", btnOneText) : button.addEventListener("click", btnTwoText);
            button.addEventListener("click",changePage);

        })
    }

    

    /*This function triggers when button on the left is clicked */
    function btnOneText(){
        let btn1NextText = myButtons1;
        let btn2NextText = myButtons2;
        switch (pageNumber) {
            case 0:
                btn1.textContent = btn1NextText.option0; 
                btn2.textContent = btn2NextText.option0;
                pageNumber = 1;
                break;
            case 1:
                btn1.textContent = btn1NextText.option2;
                btn2.textContent = btn2NextText.option2; 
                pageNumber = 3;
                break;
            case 2:
                btn1.textContent = btn1NextText.option4; 
                btn2.textContent = btn2NextText.option4;
                pageNumber = 5;
                break;
            case 3:
                pageNumber = 7;
                break;
            case 4:
                pageNumber = 9;
                break;
            case 5:
                pageNumber = 11;
                break;
            case 6:
                pageNumber = 13;
                break;
            default:
                btn1.textContent = "Well this didn't work.";
        }
        console.log("Turning page now (1)");
    }          
   
    /*This function triggers when button on the right is clicked */
    function btnTwoText(){
        let btn2NextText = myButtons2;
        let btn1NextText = myButtons1;
        switch (pageNumber) {
            case 0:
                btn1.textContent = btn1NextText.option1;
                btn2.textContent = btn2NextText.option1; 
                pageNumber = 2;
                break;
            case 1:
                btn1.textContent = btn1NextText.option3;
                btn2.textContent = btn2NextText.option3; 
                pageNumber = 4;
                break;
            case 2:
                btn1.textContent = btn1NextText.option5;
                btn2.textContent = btn2NextText.option5; 
                pageNumber = 6;
                break;
            case 3:
                pageNumber = 8;
                break;
            case 4:
                pageNumber = 10;
                break;
            case 5:
                pageNumber = 12;
                break;
            case 6:
                pageNumber = 14;
                break;
            default:
                btn2.textContent = "This didn't work. How weird is that.";
        }
        console.log("Turning page now (2)");
    }
            

    /*This function moves story to the next chosen page*/
    function changePage(){
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
            case 6:
                storyBox.innerHTML = myStory.page6; 
                console.log("page 6");
                break;
            case 7:
                storyBox.innerHTML = myStory.page7; 
                theEnd();
                break;
            case 8:
                storyBox.innerHTML = myStory.page8; 
                theEnd();
                break;
            case 9:
                storyBox.innerHTML = myStory.page9; 
                theEnd();
                break;
            case 10:
                storyBox.innerHTML = myStory.page10; 
                theEnd();
                break;
            case 11:
                storyBox.innerHTML = myStory.page11; 
                theEnd();
                break;
            case 12:
                storyBox.innerHTML = myStory.page12; 
                theEnd();
                break;
            case 13:
                storyBox.innerHTML = myStory.page13; 
                theEnd();
                break;
            case 14:
                storyBox.innerHTML = myStory.page14;
                theEnd();
                break;
            default: 
                storyBox.innerHTML = "This didn't work. It's not you, it's the code. You can fix it.";
                console.log("Oops");
        }
    console.log("This is page " + pageNumber);
    pageCounter(pageNumber);
    }


    function theEnd(){
    btn1.classList.add("hidden");
    btn1.classList.remove("visible");
    btn2.classList.add("hidden");
    btn2.classList.remove("visible")
    startBtn.classList.add("visible")
    ++replay;
    replayTest(replay);
    startScreen();
    console.log(replay + " is how many times you have played")
    }
}