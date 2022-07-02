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
    page0 : `Welcome, ${playerName}. \n Place where you come to your senses is an old gazebo. It's paint is peeling, and in the middle of the floor you see a faint stain. Chill goes through you. What has happened to you? It's time to investigate! You can follow the garden wall to the entrance, or go to rose garden near the gazebo.`,
    page1 : "Go along the wall You go along the garden wall. It's made of big stone blocks, and you should be able to easily get over it, or maybe through it now that you are a ghost. However, something seems to be holding you in the garden. You arrive to a clearing and see entrance to a labyrinth, a shed, and a gate that must be the main entrance to the garden.",
    page2 : "The rose garden is full of different roses, most just past their best bloom. Ground is covered with petals. You have a faint memory being here before, enjoying the flowers and having a picnic.You go through the garden and arrive to it's other end. You see an old oak and a  tiny pond glimmering in moonlight.",
    page3 : "The labyrith is made of brick walls and bushes. It looks like it has been neglected, but someone has been here recently. You see tracks on the ground, like something hevy has been dragged to the labyrinth. Do you try to get to the centre of the labyrinth by following the trail, or do you just float through the walls?",
    page4 : "You go to the small garden shed. Door to the shed is locked, but you just float through it. Inside you find a collection of ceramic garden pots, cobwebs and... a bloody shovel.",
    page5 : "In front of you looms an old, metallic garden gate. It's black, and everything around is over grown with wild vine. Only the doorway is clear of any plants. Strangely, the door has a shiny new metallic padlock on it. ",
    page6 : "The oak is growing tall, covering the sky and moon from your sight. Under it is small clearing, and a pair metallic garden chairs and a table. You can see the rose garden and pond from here, as well as   the gate to the garden. On the ground you see letters. Investigate the scene, or go to the garden gate?",
    page7 : `Moonlight is reflecting from the ponds calm surface, and mist is gently wrapping itself around you. It's so quiet in here. Then you see a white form appearing from the mist. -${playerName}...${playerName}...${playerName}...`,
    page8 : "When you enter the labyrith you remember being there before. You have been playing hide and seek in there so may times it's not scary at all. It's overgrown, but it doesnt't bother your ghostly form. Someone else has not been as lucky you think, as you follow the tracks of broken twigs, torn pieces of clothing and what you now suspect to be a faint trail of blood to the center of the labyrinth.",
    page9 : "As you arrive to the center of the labyrinth you are surprised that you are not there alone. First, you see a candle light. Then, a person that is sitting on the ground. He looks disheveled, dirty, and seems to be chanting something with their eyes closed. You know this person too. It's your cousin, Dren. You used to play here together as kids. You feel the cold chill going through you and know for sure, that he is the one that killed you. And here, center of the labyrinth, is where he dragged your body and buried you. Dren keeps chanting and you feel your surrounding go black. He is trying to keep your spirit in the garden. You remember him always being so afraid of ghosts... You wish to give him something to be afraid of, but before you can, your form fades as you see the sun rising. Morning came.",
    page10 : "A chill goes through your body, again. You are sure that this shovel has been used to kill you. Unfortunately, there doesn't seem to be anything else to see here. At that moment you see first sunrays shining through the dirty window, and your form slowly disappears from the sight. Morning has come.",
    page11 : "You go to the gate, and touch it's surface. As you push your hand through the gate you feel uncomfortable tingling and then get violently pushed back in the garden. You try it couple of times, and same happens again. Something is holding you here, and you cant't leave before you know what it is. You still wait by the garden gate when the morning sun rises, and you disappear from the sight.",
    page12 : "You look the area around the gate closer. In distance you can see the manor this garden belongs to. Everything around the gate is overgrown, except the door of the gate that seems to be in frequent use. You see fresh footprints on the ground that seem to be going towards a labyrinth. The padlock on the gate is open, and hanging from the door.",
    page13 : "You feel uncomfortable staying under the oak, and leave right away. Your way continues to the garden gate, maybe you can get out from here.",
    page14 : "There are letters laying on the ground. They have been stomped over, and you get the feeling that there have been a struggle.You read whats on the letter, and recognise your own handwriting:“Dear aunt Agatha,I'm sorry to hear that your health is declining. I'll be sure to come see you as soon as I can!From ${}”You see tracks going towards the pond.",
    page15 : "Tiny pond is bathing in the moonlight as mist swirls slowly on it's surface. You see a ghostly figure appear on the pier, and you hear it calling your name.-”${}...${}...${}...",
    page16 : "You approach the misty figure. As you get closer, you recognize the familiar face.“Dear ${}, is it really you? You finally came!” she speaks with voice that could be a whisper.It's your aunt, Agatha, who is the owner of the manor this garden belongs to. You have spend so many summers here, playing in the garden and the labyrinth. Oh how you missed those days.“I came here to read your letters, but your cousin Drew followed me. He drowned me. I have been waiting for you to come.”Agatha grabs your hand, and you feel peace flowing through you. At least you are not alone here.You dont mind the sun coming up, and you feel warmth as you both disappear from the sight.",
    page17 : "You get so terrified that you simply just run away. You keep going until morning comes and your form fades away from sight.",
    page18 : "As you inspect closer you see that these are all the letters you wrote to your aunt Agatha over the years. They start from when you were just a child and learning to write, full of scribbles of things you had seen. Agatha has saved each and everyone.You are lost in memories as the sun climbs up.",
    page19 : "As you wake up in the gazebo once again it all clicks.You had been summoned by aunt Agatha to come see her since she had fallen ill. When you arrived you were met by cousin Drew instead, who told you that Agatha had gone to the garden, and that you could find her in the gazebo.  Drew said that he would tag along. When you got there, Drew hit your head with a garden shovel, killing you. Then he dragged your body to the middle of the labyrinth, burying you to the shallow grave.But cousin Drew was superstitious, and had always been afraid of ghosts. That made him make some sort of spell to make sure your spirit, as well as Agathas, would stay in the garden...",
    page20 : "As you arrive to the garden gate, you hear You hear Agathas voice: ”You know ${}, all I wanted was to give the manor to you. It is yours, if you ask me. I think we should go and pay Drew a visit. “You are finally able to leave the garden, and head through the gate. It's still dark, moon shines over the garden and the road leading towards the manor. It's time for the master of the house to arrive home.The end."
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