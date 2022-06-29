document.addEventListener("DOMContentLoaded", startScreen());

/*HTML elements*/
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const storyBox = document.querySelector('#story');
let pageNumber = document.querySelector('#page-number');
pageNumber = 0;
const startBtn = document.querySelector('#start-button');


/*options for button1 */
const myButtons1 = {
    option0 : "go to page 1",
    option1 : "Go to page 3",
    option2 : "Go to page 5",
    option3 : "go to page 7",
    option4 : "go to page 9",
    option5 : "go to page 11",
    option6 : "go to page 13",
    option7 : "This is the end."
};

/*options for button 2*/ 
const myButtons2 = {
    option0 : "Go to page 2",
    option1 : "go to page 4",
    option2 : "go to page 6",
    option3 : "go to page 8",
    option4 : "go to page 10",
    option5 : "go to page 12",
    option6 : "go to page 14",
    option6 : "This is the end"
};
/*story pages */
const myStory = {
    page0 : "And so our story begins. Page 0.",
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

/** Start button is visible only when the game is not started.
 * Pagenumber sets the starting point */
function startScreen() {
    const startBtn = document.querySelector('#start-button');
    startBtn.innerHTML = "Start the story";
    startBtn.addEventListener('click', startGame);
    
    /**This function uses the other functions to start the game. 
    * It also hides the start button and makes option buttons visible*/
    function startGame() {
        pageNumber = 0;
        startBtn.classList.add("hidden");
        btn1.classList.remove("hidden");
        btn1.classList.add("visible");
        btn2.classList.remove("hidden");
        btn2.classList.add("visible");
        console.log("Game has started");
        
        let buttonOption = Array.from(document.querySelectorAll('.option'));
        buttonOption.forEach(button => {
            if(!button)return;
            button.id === "btn1" ? button.addEventListener("click", btnOneText) : button.addEventListener("click", btnTwoText);
            button.addEventListener("click",changePage);
            console.log("This is page number " + pageNumber);
            return pageNumber;
        })
    }
    

    /*This function changes the option of the button on the left */
    function btnOneText(){
        let btn1NextText = myButtons1;
        switch (pageNumber) {
            case 0:
                btn1.textContent = btn1NextText.option1; 
                pageNumber = 1;
                break;
            case 1:
                btn1.textContent = btn1NextText.option2; 
                pageNumber = 3;
                break;
            case 2:
                btn1.textContent = btn1NextText.option3; 
                pageNumber = 5;
                break;
            case 3:
                btn1.textContent = btn1NextText.option4; 
                pageNumber = 7;
                break;
            case 4:
                btn1.textContent = btn1NextText.option5; 
                pageNumber = 9;
                break;
            case 5:
                btn1.textContent = btn1NextText.option6; 
                pageNumber = 11;
                break;
            case 6:
                btn1.textContent = btn1NextText.option7; 
                pageNumber = 13;
                break;
            default:
                btn1.textContent = "Well this didn't work.";
            
        }
    console.log("Page number " + pageNumber + " from button1");
    changePage();
    return pageNumber;
    }          
   
    /*This function changes the option of the button on the right */
    function btnTwoText(){
        let btn2NextText = myButtons2;
        switch (pageNumber) {
            case 0:
                btn2.textContent = btn2NextText.option1; 
                pageNumber = 2;
                console.log("next is 2");
                break;
            case 1:
                btn2.textContent = btn2NextText.option2; 
                pageNumber = 4;
                console.log("next is 4");
                break;
            case 2:
                btn2.textContent = btn2NextText.option3; 
                pageNumber = 6;
                console.log("next is 6");
                break;
            case 3:
                btn2.textContent = btn2NextText.option4; 
                pageNumber = 8;
                console.log("next is 8");
                break;
            case 4:
                btn2.textContent = btn2NextText.option5; 
                pageNumber = 10;
                console.log("next is 10");
                break;
            case 5:
                btn2.textContent = btn2NextText.option6; 
                pageNumber = 12;
                console.log("next is 12");
                break;
            case 6:
                btn2.textContent = btn2NextText.option7; 
                pageNumber = 14;
                console.log("next is 14");
                break;
            default:
                btn2.textContent = "This didn't work. How weird is that.";
        }
    console.log("Page number " + pageNumber + " from button2");
    changePage();
    return pageNumber;
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
    }
}    

function theEnd(){
    btn1.classList.add("hidden");
    btn1.classList.remove("visible");
    btn2.classList.add("hidden");
    btn2.classList.remove("visible")
    startBtn.classList.add("visible")
    startBtn.innerHTML = "Play again?";
        if ('click'){
            startGame()
        };

}