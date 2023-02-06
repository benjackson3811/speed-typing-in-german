// click on start game button
const startGameButton = document.getElementsByClassName('btn--start');
const wordInput = document.getElementsByClassName('word-input');
const splittedGermanWords = germanWords.split(" "); 
const wordToType = document.getElementById('wordToType')

function getRandomWord(){
    return splittedGermanWords[ Math.floor(Math.random() * splittedGermanWords.length)];
}

function nextWord() {
    const word = getRandomWord();
    wordToType.textContent = word;
}

console.log(getRandomWord());

startGameButton.addEventListener('click', function(event){
    event.preventDefault();
// show the input field

// focus on the input field
wordInput.focus();
// show the word
nextWord();
// start the timer 
})


// When user enters an input

// check if correct

// if correct, add the word to the list with green background
// add 1 to score

// if incorrect, add the word to the list with redground

// clear user input

// show the next word

//Stats

// Calc the stats
//check if game has ended

// When Game has ended, alert player to score
// refresh user page