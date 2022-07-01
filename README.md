# The Garden Gate - Interactive story

## Strategy
This game is Choose your own adventure- type of story.  Player can choose to play only one story line or, if replayed, unlock the final story. This game is for fun, but has some darkes themes and is not suitable for young players. 

## Scope
Since the project can't be too large I choose to make a limited amount of story lines and make the game re-playable. To Make this sort of text-heavy game I have been advised to make use Of JSon, and will add most of the text on a separate file to be called on.

### User goals:
What is their goal? What problem does this product or feature solve for them?
-It's a game, and hopefully user is going to have some fun playing it.

#### User Stories:
- User can start the game.
- User can give a name for the character.
- User can read the story part, and choose from options what to do next.
- User can end the game when they want.
- User can choose to replay.
- User can see items they have collected.

## Structure

### Structure of the site
![](assets/images/readme-sitemap.jpeg "")
### Structure of the game
![](assets/images/readme-story-roadmap.jpeg "")


## Skeleton:

![](assets/images/readme-screens1.jpeg "")
![](assets/images/readme-screens2.jpeg "")


## Surface:
Style: 
I wanted this small game to have old school Nintendo gameboy feeling, 
mixed with "choose your own adventure"-type of text adventure mixed with gothic romance horror story.
The style would be visible in the background, and the "game screen" would be mostly white.
Some pictures that might appear during game are pixel art.

Colors: Black, white and gray tones. Nothing fancy here.

Fonts: Press Start 2P from Google Fonts
- ![](assets/images/readme-font.jpeg "")


## TESTING
User stories:
- User can choose to start the game.
- User can give a name for the character.
- User can read the story part, and choose from options what to do next.
- User can see their previous decision.
- User can end the game when they want.
- User can choose to replay.
- User can see items they have collected.

### Bugs and other issues:
- Had problems with start button function that was purely JS. Changed the start-button from being JS to be in HTML instead. *Fixed*
- Ended up doing same with thing with option buttons. *Fixed*
- 29/6: Problem: How to change text of both option buttons at the same time as well as the story text. Trying to have all three to read the pageNumber, but something isn't connecting right. After meeting with mentor I'm going to change code so that all three changes are under one function, since currently they are seperate. (Note: functions are under same function, and then in their seperate ones) *Fixed*
- "forEach is not a function" Error. Added Array.from(document.querySelectorAll('')) to make buttons an array. *Fixed*
- All the different functions that use pageNumber needs to be updated at the same time. Solution: a function (pageCounter) that collects the number everytime. *Fixed*
- Option buttons are hopping over options. I suspect that they receive the same command too many times. Solution: The function is right but the texts are wrong. Problem was with the order of buttons options. *Fixed*
- Added replay button, but it doesnt refresh the page number. Buttons seems to be adding new page number to previous one they used. This seems to be part of the ongoing problem with pagenumber updating. *Fixed*
- 30/6: Bug that shows html span element instead of the page number value. Solution: The initial pageNumber value needs to be "0". *Fixed*
- On a second play round forward "start button" changes the text to "replay", but it changes right back to "start game" when clicked/ Update: Now it shows "Play again" from start. Solution: Give value of Zero in the start, and jump to startScreen on replays. *Fixed*
- Only the option button that gets clicked gets updated. Solved by adding both btn1 and btn1 receiving a new message when one of them is clicked. *Fixed*
- 1/7: When replayed, you have to click one extra time for screen to refresh (Text getting to page zero and option buttons to appear). Solution: Function theEnd had unnecessary event listener *Fixed*
- Replay counter shows Nan instead of a number. *Fixed*
- Quick reminder for myself to never name name just name *Fixed*
- Value given for the name box appears in story pages, but can´t be given by user.
- As I got page number showing properly on it's own it felt unnecessary. I shall remove it. *Fixed*



- Other known issues: buttons are functional even when hidden, so they can be clicked by accident or by on purpose.

### DEPLOYMENT
- Site was deployed to Github Pages.
- From Github, I chose the current project The Garden Gate and Settings.
- On the leftside of the page there is Pages.
- Choose the Main branch
- Site will be published.
- This site is published at: 

### Inspiration:
- Interactive fiction (https://en.wikipedia.org/wiki/Interactive_fiction)
- Text adventures
- Choose your own adventure-books (https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure)
- Zero Escape- game series (https://en.wikipedia.org/wiki/Zero_Escape)

### CREDITS
- People:
- Media:
- Codes from other sources:


#### Other things I used while doing this page:
- Use JavaScript to get value from textbox and display on the page https://www.youtube.com/watch?v=aEj0Wu33hJM

-Choose your own story builder (used in this project only to visualize the road map)
https://twinery.org/

- Balsamiq wireframes

-Favicon converter
https://favicon.io/favicon-converter/

-Pixel art page and tool
https://www.pixilart.com/

## Thank you for reading!