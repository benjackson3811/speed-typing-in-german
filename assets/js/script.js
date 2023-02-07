const startGameButton = document.getElementById('btn--start');
const splittedGermanWords = germanWords.split(" "); 
const wordDisplay = document.getElementById('wordDisplay');
const input = document.getElementById('wordInput');
const timer = document.getElementById('timer');

/**
const condition = {
    currentWord:'',
    score: 0,
    timeElapsed:0,
    GameLength:60,
}**/


startGameButton.addEventListener('click',startGame());
    if (startGame.type === 'btn--start');
    startGame();


input.addEventListener('input',()=>{
    const wordArray = wordDisplay.querySelectorAll('span');
    const inputArray = input.value.split('');

    let correct = true
    wordArray.forEach((characterSpan,index) => {
        const character = inputArray[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        } else if (character === characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }
    })

    if (correct) nextWord()
})
    
    

    
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
    characterSpan.innerText = character;
    wordDisplay.appendChild(characterSpan);
    })
    input.value = null;
  
}
console.log(getRandomWord());

/**Timer */
let startTime
function timerStart() {
    timer.innerText = 0
    startTime = new Date()
    setInterval(()=>{
       timer.innerText = timerTime()
    },1000
    )
}

function timerTime() {
    return Math.floor((new Date() - startTime)/1000)
}


/*startGame Function */
function startGame(){
    nextWord();
    input.focus();
    timerStart();
    wordDisplay.value = null;