const startGameButton = document.getElementById('btn--start');
const instructGameButton = document.getElementById('btn--inst');
const easyGameButton = document.getElementById('btn--easy');
const mediumGameButton = document.getElementById('btn--med');
const hardGameButton = document.getElementById('btn--hard');
const splittedGermanWords = germanWords.split(" "); 
const wordDisplay = document.getElementById('wordDisplay');
const input = document.getElementById('wordInput');
const timer = document.getElementById('timer');
const score = document.getElementById('score');
const finalScore =document.getElementById('finalScore');
const wpm = document.getElementById('wpm');

/**Event Listeners */

/**Click to Start the Game */
startGameButton.addEventListener('click',startGame);

/**On typing the word - check the type word is correct or incorrect */
input.addEventListener('input',wordInspect);

/**Initalise Game */

/*startGame Function */
function startGame(){
    nextWord();
    input.focus();
    startGameButton.className = 'startButton hide';
    instructGameButton.className = 'instButton hide';
    timer.className = 'timer show';
    timeleft();
      
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
  
};

/**Timer */
let startTime
function timeleft() {
    timer.innerHTML = '';
    startTime = new Date();
    setInterval(()=>{
        timer.innerHTML = seconds();
    },1000)
    if (timer.innerHTML > 60){
        clearInterval();
    }
};

/**Date in seconds */
function seconds() {
    return Math.floor((new Date()-startTime)/1000)
}

/**Score */ 
function inGameScore() {
    score.innerHTML = '';
    if (score.innerHTML ==''){
        ++score.innerText;
    }
    
}

/** Game Finish */

function gamefinish(){
    (timer === 60)
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
    let correct = true;
    
    wordArray.forEach((characterSpan,index) => {
        const character = inputArray[index];
        if (character == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false;
        } else if (character === characterSpan.innerText){
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        } else {
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
            correct = false;
        }
    });

    if (correct) nextWord();
}
    


    document.addEventListener('DOMContentLoaded',function(){

    });
