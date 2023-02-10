const startGameButton = document.getElementById('btn--start');
const splittedGermanWords = germanWords.split(" "); 
const gameContainer = document.getElementById('gamecontainer')
const wordDisplay = document.getElementById('wordDisplay');
const input = document.getElementById('wordInput');
const timer = document.getElementById('timer');
const scores =document.getElementById('score');
const insructions =document.getElementById('instructions');

/**Event Listeners */

/**Click to Start the Game */
startGameButton.addEventListener('click',startGame);

/**On typing the word - check the type word is correct or incorrect */
input.addEventListener('input',wordInspect);

/**Initalise Game */

document.getElementById('btn--start').hidden = false;
document.getElementById('current-score').hidden = true;
document.getElementById('gameContainer').hidden = true;
document.getElementById('instructions').hidden =false;




/*startGame Function */
function startGame(){
    nextWord();
    input.focus();
    document.getElementById('btn--start').hidden = true;   
    document.getElementById('wordInput').disabled = false;
    document.getElementById('current-score').hidden = false;
    document.getElementById('gameContainer').hidden = false;
    document.getElementById('instructions').hidden =true;
    startTimer();
    inGameScore();
    }
/*Function to create a random word from german-word.js array */
function getRandomWord(){
    return splittedGermanWords[ Math.floor(Math.random() * splittedGermanWords.length)];
    };

/*Creating a new word for the DOM inner text */

function nextWord(){
    let word = getRandomWord()
    wordDisplay.innerText ='';
    word.split('').forEach(character =>{
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    wordDisplay.appendChild(characterSpan);
    });
    input.value = null;
    wordInspect()
};

/**Timer */
let interval = null;
let time = 0;

function tick() {
    time += 1;
    timer.innerHTML = time;
    if (time >= 60) {
        stopTimer(); 
    };
}

function startTimer() {
    resetTimer();
    interval = setInterval(tick, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    time = 0;
}


/**Score */ 

let difference = null;

function inGameScore() {
let scoreCount = score.innerText;
score.innerText = ++scoreCount;
}

    
/** Event Listener/ checking word inputted
 *  to show if the words inputted were correct/ incorrect
 * if correct letter showing green
 * if incorrect showing in red */

function wordInspect() {
    //breaks the displayed german words into individual characters
    // that can be checked against what the user inputs.
    const wordArray = wordDisplay.querySelectorAll('span');
    const inputArray = input.value.split('');
    let correct
    
    wordArray.forEach((characterSpan,index) => {
        const character = inputArray[index];
        if (character == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false;
        } else if (character === characterSpan.innerText){
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
            correct = true;
        } else {
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
            correct = false;
        }
    });
    
    if (correct) nextWord();
    if (correct) scores+1;
    console.log(scores);
    inGameScore();
}
    
    document.addEventListener('DOMContentLoaded',function(){

    });
