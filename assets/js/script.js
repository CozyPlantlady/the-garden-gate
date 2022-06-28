document.addEventListener("DOMContentLoaded", startScreen());
let pageNumber = document.getElementById('page-number');
pageNumber = 0;

/** Start button is visible only when the game is not started */
function startScreen() {
    let startBtn = document.getElementById("start-button");
    startBtn.innerHTML = "Start the story";
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    startBtn.addEventListener('click', startTheGame);
    
    /**This function uses the other functions to start the game. 
    * It also hides the start button */
    function startTheGame() {
        startBtn.classList.add("hidden");
        btn1.classList.remove("hidden");
        btn1.classList.add("visible");
        btn2.classList.remove("hidden");
        btn2.classList.add("visible");
        console.log("Game has started");
        page();
        changePage();
        
    }

    function page(){
        btn1.addEventListener('click', changePage);
        btn1.addEventListener('click', btnOneText);
        btn2.addEventListener('click', changePage);
        btn2.addEventListener('click', btnTwoText);
        console.log("This is page number " + pageNumber);
    }

    /*This function changes the option of the button on the left */
    function btnOneText(){
        const myButtons1 = {
            option0 : "go to page 1",
            option1 : "Go to page 3",
            option2 : "Go to page 5",
            option3 : "go to page 7",
            option4 : "go to page 9",
            option5 : "go to page 11",
            option6 : "go to page 13"
        };
        let btn1NextText = myButtons1;
        switch (pageNumber) {
            case 0:
                btn1.textContent = btn1NextText.option0; 
                pageNumber = 1;
                console.log("btn1case0");
                break;
            case 1:
                btn1.textContent = btn1NextText.option1; 
                pageNumber = 3;
                console.log("btn1case1");
                break;
            case 2:
                btn1.textContent = btn1NextText.option2; 
                pageNumber = 5;
                console.log("btn1case3");
                break;
            case 3:
                btn1.textContent = btn1NextText.option3; 
                pageNumber = 7;
                console.log("btn1case5");
                break;
            case 4:
                btn1.textContent = btn1NextText.option4; 
                pageNumber = 9;
                console.log("btn1case7");
                break;
            case 5:
                btn1.textContent = btn1NextText.option5; 
                pageNumber = 11;
                console.log("btn1case9");
                break;
            case 6:
                btn1.textContent = btn1NextText.option6; 
                pageNumber = 13;
                console.log("btn1case11");
                break;
            default:
                btn1.textContent = "Well his didn't work.";
            
        }
    console.log("Page number " + pageNumber + " from button1");
    changePage();
    return pageNumber;
    }          
   
    /*This function changes the option of the button on the right */
    function btnTwoText(){
        const myButtons2 = {
            option0 : "Go to page 2",
            option1 : "go to page 4",
            option2 : "go to page 6",
            option3 : "go to page 8",
            option4 : "go to page 10",
            option5 : "go to page 12",
            option6 : "go to page 14"
        };
        let btn2NextText = myButtons2;
        switch (pageNumber) {
            case 0:
                btn2.textContent = btn2NextText.option0; 
                pageNumber = 2;
                console.log("btn2case0");
                break;
            case 1:
                btn2.textContent = btn2NextText.option1; 
                pageNumber = 4;
                console.log("btn2case2");
                break;
            case 2:
                btn2.textContent = btn2NextText.option2; 
                pageNumber = 6;
                console.log("btn2case4");
                break;
            case 3:
                btn2.textContent = btn2NextText.option3; 
                pageNumber = 8;
                console.log("btn2case6");
                break;
            case 4:
                btn2.textContent = btn2NextText.option4; 
                pageNumber = 10;
                console.log("btn2case8");
                break;
            case 5:
                btn2.textContent = btn2NextText.option5; 
                pageNumber = 12;
                console.log("btn2case10");
                break;
            case 6:
                btn2.textContent = btn2NextText.option6; 
                pageNumber = 14;
                console.log("btn2case12");
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
        let storyBox = document.getElementById("story");
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
                console.log("page 7");
                break;
            case 8:
                storyBox.innerHTML = myStory.page8; 
                console.log("page 8");
                break;
            case 9:
                storyBox.innerHTML = myStory.page9; 
                console.log("page 9");
                break;
            case 10:
                storyBox.innerHTML = myStory.page10; 
                console.log("page 10");
                break;
            case 11:
                storyBox.innerHTML = myStory.page11; 
                console.log("page 11");
                break;
            case 12:
                storyBox.innerHTML = myStory.page12; 
                console.log("page 12");
                break;
            case 13:
                storyBox.innerHTML = myStory.page13; 
                console.log("page 13");
                break;
            case 14:
                storyBox.innerHTML = myStory.page14; 
                console.log("page 14");
                break;
            default: 
                storyBox.innerHTML = "This didn't work. It's not you, it's the code. You can fix it.";
                console.log("Oops");
        }
    }
}    