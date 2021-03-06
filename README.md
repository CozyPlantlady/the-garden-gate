# The Garden Gate - Interactive story

![](doc/readme-images/readme-screens3.jpeg "")

In this README-file I'm using both the words *game* and *story* to talk about same project.
The Garden Gate is original work written by creator.

## Strategy
Game is choose your own adventure-story. User can choose to play only one story line or, if replayed, unlock the final ending. This game is for fun, but has some darker themes (death) and hence is not suitable for younger audience. 

## Scope
To do this project within given time there is limited amount of story lines and made game re-playable. The final game is 24 pages, with 7 normal endings and 1 secret ending.

### User goals:
What is their goal? What problem does this product or feature solve for them?
- It's a game, and hopefully user is going to have some fun playing it.

### User Stories:
- As a user I can start the game.
- As a user I can give a name for the character that is used in the game.
- As a user I can read the story and choose what to do next.
- As a user I can find more information about the game.
- As a user I can choose to replay.

## Structure

### Structure of the site
Original plan for the site

![](doc/readme-images/readme-sitemap.jpeg "")

I have cut away some of the features originally planned. Because of this the first features are: 
- The story page that shows the text
- Two option buttons
- Start button
- Form to give a player name
- Replay counter

### Structure of the game

**Before**

![](doc/readme-images/readme-story-roadmap.jpeg "")

**After**

![](doc/readme-images/readme-story-roadmap-numbered-altered.jpeg "")

### Mentionable changes:
Once I started to code I faced some limitations. Most importantly, the longer text sections needed to be in two pages, and final ending needed to be triggered the right way. In all honesty, this makes order of the pages in the code confusing. I decided to go with it since time was limited. In the future if I'm doing similar project, I know to plan ahead more.

## Skeleton:
### Original plans
![](doc/readme-images/readme-screens1.jpeg "")
![](doc/readme-images/readme-screens2.jpeg "")

### Final product
#### Main
![](doc/readme-screenshots/readme-tgg1.jpeg "")

In the main part of the screen we have
- **Header**, that has the name of the page.
- By clicking **info**, page scrolls to the button where info text is. 
- **Name field** that let's user give a name that is then used in the story.
- **Info**-text changes color and size when user hovers mouse over it, to indicate it is clickable.
- **Story page**, where the story will be shown.
- **Start** button, that starts the game.

#### Replay, Info and Footer
![](doc/readme-screenshots/readme-tgg2.jpeg "")

- **Replay counter** shows the amount of times user has replayed the game without refreshing.
- **Go back up** scrolls back to the top of the page.
- **Footer text** has name of the creator.

#### During the game
![](doc/readme-screenshots/readme-tgg3.jpeg "")

When game is started it shows **two option** buttons. Sometimes only one option is visible.

#### Replay
![](doc/readme-screenshots/readme-tgg4.jpeg "")

When the story line has come to an end user can choose to **replay**. Replay adds to a **replay counter** (No other function) and it's inmpossible to get the final ending without replaying.

![](doc/readme-screenshots/readme-tgg5.jpeg "")

When special story point is found user gets an **alert**.

### A word about media queries
When this project started I had media queries waiting for me to use them, but in the end this page became so simple that there was no need to use them. So, media queries have been removed from this project.

## Surface:
Style: 
- I wanted this small game to have old school Nintendo gameboy feeling, 
mixed with "choose your own adventure"-type of text adventure mixed with gothic romance horror story.
- The style could be visible in the background, and the "game screen" would be mostly white.
- For the sake of hiding the buttons when there is no text option available the chosen border style is "hidden". This is not the best option when thinking accessability, but on my current skill set it was the way I chose to do things.

### Colors: 
![](doc/readme-images/color-palette.jpeg "")

I chose to use very simple color scheme.
- Black #000
- White #fff
- Gray #999
- Gray #888

### Fonts: 

[Press Start 2P from Google Fonts](https://fonts.google.com/specimen/Press+Start+2P) by CodeMan38

![](doc/readme-images/readme-font.jpeg "")

This font is chosen to give the feel of an retro game.

### Favicon

Favicon icon made with Pixilart and converted with Favicon converter. Made by creator.

![](doc/readme-images/readme-favicon-flower.png "")


## TESTING

### User Stories:

#### **As a user I can give a name for the character that is used in the game.**
When I arrive to the page I see that there is a box asking me who I am. I write my name, and push button **Use name in Story**. Clicking it makes the **start the story** button appear under the story page, and the button to submit name again disappears. In the story I see that the name I had given is used in the text.

#### **As a user I can start the game.**
When arriving to the main page I as a user scale the content downwards, and see that I can't start the game before submitting a name to use in the game. Once I do that, **Start the story** button appears under the first *story page*. This gives me information that once I click the button the story will go forward. When I hover the mouse over the **Start button** it responds by getting larger. Button disappears once it gets clicked.

#### **As a user I can read the story and choose what to do next.**
Once the game has started I see new story page. It has the name I have given previously, and under the story page there is two options to choose. Once I click an option the story page changes to reflect my choice. 

#### **As a user I can choose to replay.**
When a story line comes to an end the **Play again?** button appears. When I click that, the story starts from the start. **Times you have replayed** 
gets added by 1.

#### **As a user I can find more information about the game.**
When I arrive to the page I can see that there is a text saying **info** at the top of the page. When I hover the mouse over it it changes color from black to grey and shrinks, indicating that it is clickable. Once I click it I'm send to the lower part of the page, where I can see **Disclaimer** text and **info** what the game is about. I can click **Go back up** to get back to the top of the page.

### Bugs and other issues:

#### Fixed Issues
- Had problems with start button function that was purely JS. Changed the start-button from being JS to be in HTML instead.
- Ended up doing same with thing with option buttons.
- 29/6: Problem: How to change text of both option buttons at the same time as well as the story text. Trying to have all three to read the pageNumber, but something isn't connecting right. After meeting with mentor I'm going to change code so that all three changes are under one function, since currently they are seperate. (Note: functions are under same function, and then in their seperate ones)
- "forEach is not a function" Error. Fixed: Added Array.from(document.querySelectorAll('')) to make buttons an array.
- All the different functions that use pageNumber needs to be updated at the same time. Solution: a function (pageCounter) that collects the number everytime.
- Option buttons are hopping over options. I suspect that they receive the same command too many times. Solution: The function is right but the texts are wrong. Problem was with the order of buttons options.
- Added replay button, but it doesnt refresh the page number. Buttons seems to be adding new page number to previous one they used. This seems to be part of the ongoing problem with pagenumber updating.
- 30/6: Bug that shows html span element instead of the page number value. Solution: The initial pageNumber value needs to be "0".
- On a second play round forward "start button" changes the text to "replay", but it changes right back to "start game" when clicked/ Update: Now it shows "Play again" from start. Solution: Give value of Zero in the start, and jump to startScreen on replays.
- Only the option button that gets clicked gets updated. Solved by adding both btn1 and btn1 receiving a new message when one of them is clicked.
- 1/7: When replayed, you have to click one extra time for screen to refresh (Text getting to page zero and option buttons to appear). Solution: Function theEnd had unnecessary event listener.
- Replay counter shows Nan instead of a number.
- Quick reminder for myself to *never name name just name*.
- As I got page number showing properly on it's own it felt unnecessary. I shall remove it.
- 2/7: Was going to add 3th option button, but decided not to. It would make code more complicated with little value to add. Changing story page order so that it doesnt matter.
- 4/7: After adding some styling the option buttons wont disappear fully. Reason: Padding. Might have to ditch it all together.
- Some story pages are too long and text overflows. To fix this some longer pages go to two pages. I add these to last of the list.
- Depending of the button color and its's background color it may or may not be visible when having a empty a string of text. I want them to be invisible.
- As fun as it is to have a lot of text in the buttons, it's not functional. Let buttons have one size, and shorten the long texts. Update: This really makes it obvious that there is an empty box. To solve this I have removed background color of the button, but to give a visual que for the user the text gets bigger when user hovers mouse over it.
- Value given for the name box appears in story pages, but can??t be given by user. Update: Resolved after *storyPages* were moved inside *changePage* function. The problem was that storyPages were read before the playerName had been set. 


### Not fixed

- Other known issues: buttons are functional even when hidden, so they can be clicked by accident or by on purpose. These is main problem when playing.
- Safari browser shows several story pages at once. No known fix.
- User gets an alert when they find a story point. However, these stack up and before the final ending they are receiving 4 different alerts each time they finish a story line. This could be fixed just by removing the alert, and change it to something else. Original idea was to show an item to symbolize the found story point.
- Can't hide the input field for the name after game starts.

### Possible features to add
- Choice to choose between dark and light color theme, or for color scheme that looks more authentic to first **Gameboy** screens.
- Json to hold all the text options as arrays. This would make code a lot cleaner, but I didn't have enough time to throw myself in to it.
- Choice to choose another font for the text. Current font is a style choice, but another font would be easier to read and there are surely users whe would prefer it.
- Pixel art pictures for some story points
- Pixel art background image, that would be mostly visibe in wider screens.
- Instead of alerts show icons when certain story point is met. For example, Item is first visible in the story page and is then moved to a box under the story page to symbolise that user has earned something.
- If nothing else, alert box could redone with style (and help of JQuery).


### Testing with code validators
Tested with **JSHint validator**:

![](doc/readme-screenshots/readme-jshint.jpeg "")

- First warning comes from replayCounter function, and it should turn array to a number, that function can use. 
- Second warning is coming from **buttonOption** array. This notices if it's left or right button that gets clicked, and moves forward to either btnOneText or btnTwoText accordingly. I didn't find any problem with this part of the code.

- Unused variable *replay** removed.

- Other small bugs, like forgotten semicolons, fixed.

Tested with **W3C CSS-validator**:
- Found bugs fixed.
- Validator gives a warning about **.hidden** class, since it has both white text and white background. However, this is the whole point.

Tested with **W3C markup-validator**:
- No mentionable issues

Tested with  **Chrome developer tool Lighthouse**:

![](doc/readme-screenshots/readme-lighthouse.jpeg "")

Page received 100 point from all the tested areas.


### DEPLOYMENT
- Site was deployed to **Github Pages**.
- From Github, I chose the current project **The Garden Gate** and **Settings**.
- On the leftside of the page there is **Pages**.
- Choose the **Main** branch
- Site will be published.
- This site is published at: https://cozyplantlady.github.io/the-garden-gate/



## CREDITS
### Inspiration:
[Interactive fiction](https://en.wikipedia.org/wiki/Interactive_fiction)

Text adventures

[Choose your own adventure-books](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure)

[Zero Escape- game series](https://en.wikipedia.org/wiki/Zero_Escape)

### Validators:
[JSHint](https://jshint.com)

[W3C CSS-validator](https://jigsaw.w3.org/css-validator/)

[W3C Markup validator](https://validator.w3.org/)

### Other things I used while coding this game:

[Twinery](https://twinery.org/)
-Choose your own story builder. In this project it was used purely to visualize the roadmap, but YOU could build your own story easily with this.

Balsamiq wireframes

[Pixilart](https://www.pixilart.com/)
Pixel art page and tool

[Favicon converter](https://favicon.io/favicon-converter/)
To turn your pixel art (or other picture) into favicon

## Thank you for reading!