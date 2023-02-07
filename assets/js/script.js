const startGameButton = document.getElementById('btn--start');
const splittedGermanWords = germanWords.split(" "); 
const wordDisplay = document.getElementById('wordDisplay');
const input = document.getElementById('wordInput');
const timer = document.getElementById('timer');


const condition = {
    currentWord:'',
    score: 0,
};


startGameButton.addEventListener('click',startGame());
    if (startGame.type === 'btn--start');


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
    let word = getRandomWord();
    word.split('').forEach(character =>{
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    wordDisplay.appendChild(characterSpan);
    });
    input.value = null;
  
}
console.log(getRandomWord());
