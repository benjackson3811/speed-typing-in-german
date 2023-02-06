let startGameButton = document.getElementsByClassName('button')
const splittedGermanWords = germanWords.split(" "); 
const wordDisplayElement = document.getElementById('wordDisplay');
const input = document.getElementById('wordInput');

function getRandomWord(){
    return splittedGermanWords[ Math.floor(Math.random() * splittedGermanWords.length)];
}

function nextWord(){
    const word =getRandomWord();
    wordDisplayElement.textContent = word;    
}

console.log(getRandomWord());

startGameButton.addEventListener('click', function(event){
    event.preventDefault();
    input.className ='';
    nextWord();
})