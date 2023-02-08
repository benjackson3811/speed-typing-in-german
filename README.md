! (Speed Typing in German) - Need picture of the Game title save in brackets

# [Speed Typing in German](https://benjackson3811.github.io/speed-typing-in-german/)

## Introduction
<hr>
Speed Typing in German is a speeding typing game designed to provide the user a simple game where they can practise spelling and typing as many German language words as possible in a 60 second period.

## Table of Contents
<hr>

[Introduction](#introduction)

[Table of content](#table-of-content)

[User Experiance](#user-experiance)
- [Target audience](#target-audience)
- [User Requirements and Expectations](#user-requirements-and-expectations)
- [User Stories](#user-stories)
- [Site Designer Stories](#site-designer-stories)
- [Site Structure](#site-structure)

[Design Choices](#design-choices)

[Wireframes](#wire-frames)

[Features](#features)
- [header](#header)
- [Instructions](#instructions)
- [Game Area](#game-area)
- [Timer](#timer)
- [Word to Type](#word-to-type) 
- [Typed Word](#typed-word)
- [Responsive Elements](#responsive-elements)
- [Scores Area](#scores-area) 

[Future-features](#future-features)

[Technologies used](#technologies-used)

[Testing](#testing)
- [Responsive Design](#responsive-design)
- [Validation Testing](#validation-testing)
- [Bugs and Errors found](#bugs-and-errors-found)

[Deployment](#deployment)
- [Steps](#steps)
- [Live link](#live-link)

[Credits](#credits)
- [Content](#content)
- [Media](#media)

[Acknowledgements](#acknowledgments)

<hr>

### User Experiance
- ### Target audience
* German Learners
- ### User Requirements and Expectations
* A simple and responsive game that lets the user type as many german words as possible in 60 seconds. Secondly, showing immediate feedback if errors as made.
- ### User Goals
* I want to be able to navigate through the site smoothly.
* I want to be able to understand immediately the purpose of the site.
* I want a new word to type automatically after I have finsihed my previous word.
* I want to see if I have made any mistake typing the letters of the word
* I want to see the total number of correct words I have typed.
* I want to see the total number of incorrect words I have typed.
- ### Site Designer Goals
* I want to provide a site for the user where they can practise spelling German Language words for education purposes.
* I want to create a simple and easy to navigate site.
* I want the site to provide immediate feedback whether the letters are spelt correctly/ incorrectly.
* I want the user to be able to start typing directly.
- ### Site Structure
* A single page game using Javascript to show;
- A game area, that shows immediate feedback, 
- A score area that shows final totals over 60s.
- A reply button that allows for an immediate restart.
<hr>

### Design Choices
* The colours used in the website were from a palete from [Coolors](https://coolors.co/). The picture were picked because they provided a bright and summmery color scheme.
* Fonts. The font picked for the website was Poopins from [Google Fonts](https://fonts.google.com/) this was compliment the colours picked.
<hr>

### Wireframes

The wireframes for the site were created using [Balsamiq](https://balsamiq.com).

They are created for three device types. Mobile, Laptop and Tablet.
<hr>

### Features
- ### Header
- ### Instructions
- ### Game Area
- ### timer - 60-seconds
- ### Word to Type 
word to type - and meaning
- ### Typed Word
typed word
- ### Responsive Elements
correct letter in green
incorrect letter in red
- ### Scores Area 
* Scores on Individual Words
* Final Scores - total words/ correct number of individual letter/ incorrect
<hr>

### Future-features
* A translate of the German words into English
<hr>

### Technologies used
* [Balsamiq](https://balsamiq.com)
* [Coolors](https://coolors.co/)
* [Google Fonts](https://fonts.google.com/)
* [HTML5](https://www.w3schools.com/html/html_intro.asp) - for content and website structure. 
* [CSS](https://www.w3schools.com/css/css_intro.asp)- for Website styling.
* [Javascript](https://www.w3schools.com/js/default.asp) - to make the website interactive.
* [lingua.com](https://lingua.com/pdf/deutsch-text-flughafen.pdf) - Source of German text.
<hr>

### Testing
- ### Responsive Design
-Lighthouse
- ### Validation Testing
- Code validation - HTML + CSS
## Testing user stories. - show how the site meets each story.
- ### User Goals
* I want to be able to navigate through the site smoothly.
- This is possible to do through the start button.
* I want to be able to understand immediately the purpose of the site.
- Possible through the paragraph instruction below the start button.
* I want a new word to type automatically after I have finsihed my previous word.
- Possible to do through the word input file.
* I want to see if I have made any mistake typing the letters of the word
- Visible through the word display file.
* I want to see the total number of correct words I have typed.
* I want to see the total number of incorrect words I have typed.
- ### Site Designer Goals
* I want to provide a site for the user where they can practise spelling German Language words for education purposes.
* I want to create a simple and easy to navigate site.
* I want the site to provide immediate feedback whether the letters are spelt correctly/ incorrectly.
* I want the user to be able to start typing directly.

- ### Bugs and Errors found
1) The idea for the render new word function code was taken from https://www.youtube.com/watch?v=yZ93TTdGxa8. The bug found was after the word was successfully typed and new word was rendered, however you have to type the inital word and then the second word.
this was fixed by adding a section to the formula to change the innerText of the wordDisplay formula showing the '' after the word has been correctly typed.
![Two Words showing to be inputted](assets/images/readme.md-images/two-words-show-to-be-inputted.png)
2) The English keyboard is not set up for easy typing of german punctuation - for example on the word Müller. 
Words that had umlaut were taken out of the german.words.js data source.
![Umlaut-error](assets/images/readme.md-images/umlaut-error.png)
3) Favicon. The Favicon added was not loading. This was due to it not having the link added in HTML.
![favicon-error](assets/images/readme.md-images/favicon-error.png)
<hr>

- ### Peer Review

### Deployment
- ### Steps
- ### Live link
<hr>

### Credits
- ### Content
* Used for ideas on format and functions.
- Acradea Building a Speed typing game - https://www.youtube.com/watch?v=yZ93TTdGxa8
- Web Dev Simpified - https://www.youtube.com/watch?v=R-7eQIHRszQ

- ### Media
<hr>

### Acknowledgements
<hr>