const startGameButton = document.getElementById('btn--start');
const splittedGermanWords = germanWords.split(" "); 
const wordDisplay = document.getElementById('wordDisplay');
const input = document.getElementById('wordInput');
const timer = document.getElementById('timer');

startGameButton.addEventListener('click',startGame);

/*startGame Function */
function startGame(){
    nextWord();
    input.focus();   
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

/**Score */

/** Event Listener/ checking word inputted
 *  to show if the words inputted were correct/ incorrect
 * if correct letter showing green
 * if incorrect showing in red */
input.addEventListener('input',()=>{
    const wordArray = wordDisplay.querySelectorAll('span');
    const inputArray = input.value.split('');
    let correct = true;
    
    wordArray.forEach((characterSpan,index) => {
        const character = inputArray[index];
        if (character == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false
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
});
    


    
