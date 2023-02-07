const startGameButton = document.getElementById('btn--start');
const splittedGermanWords = germanWords.split(" "); 
const wordDisplay = document.getElementById('wordDisplay');
const input = document.getElementById('wordInput');

/*storing data in html */
const condition = {
    currentWord:''
}

input.addEventListener('input',()=>{
    console.log(changed)
})

startGameButton.addEventListener('click',startGame());
    if (startGame.type === 'btn--start');
    
/*startGame Function */
function startGame(){
    nextWord();
    input.focus();
    input.value = null;
}
/*Function to create a random word from german-word.js array */
function getRandomWord(){
    return splittedGermanWords[ Math.floor(Math.random() * splittedGermanWords.length)];
    };

/*Creating a new word for the DOM inner text */
function nextWord(){
    let word = getRandomWord();
    word.split('').forEach(character =>{;
        const characterSpan = document.createElement('span');
        characterSpan.classList.add('correct')
        characterSpan.innerText = character;
        wordDisplay.appendChild(characterSpan);
    })
}
console.log(getRandomWord());





/**Timer */
 /**Reset input */   
/*check answer*/

/*Calculate score */