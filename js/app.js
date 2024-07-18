
/*-------------- Constants -------------*/
const win_message = "Yay! You saved Honda"
const lost_message = "Oh no! Honda has been abducted"
const max_chances = 5


const wordlist = [
'nebula | Cloud of gas and dust in space.',
'galaxy | Massive system of stars, planets, and other celestial bodies.',
'comet  | Icy body that releases gas and dust, forming a tail.',
'meteor | Space rock that burns up in Earth\'s atmosphere.',
'asteroid | Small rocky body orbiting the sun.',
'blackhole | Region of space with strong gravitational pull, nothing can escape.',
'exoplanet | Planet outside our solar system.',
'supernova | Explosive death of a star.',
'quasar | Extremely bright and distant active galactic nucleus.',
'cosmos | The universe seen as a well-ordered whole.',
'satellite | Man-made object orbiting a planet.',
'orbit | Path of a celestial body around a star, planet, or moon.',
'spacesuit | Worn by astronauts to survive in space.',
'lightyear | Distance light travels in one year.',
'astrolabe | Ancient instrument used to observe and calculate the position of celestial bodies.',
'pulsar | Highly magnetized, rotating neutron star that emits beams of electromagnetic radiation.',
'andromeda | Nearest spiral galaxy to the Milky Way.',
'solarflare | Sudden burst of radiation from the sun\'s surface.',
'telescope | Instrument used to observe distant objects in space.'
]

/*---------- Variables (state) ---------*/

let hiddenWord
let guessedWord = []
let hint
let playerChoice
let playerChances 
let audioHasPlayed

// audio effects
let warningBark = new Audio("./audio/warning.mp3")
let gameover = new Audio("./audio/aliencoming.mp3")
let wingame = new Audio("./audio/winsgame.mp3")
let buttonclick = new Audio("./audio/buttonclick.mp3")
let alienenters = new Audio("./audio/alienenters.mp3")
let bgmusic = new Audio ("./audio/backgroundmusic.mp3")

/*----- Cached Element References  -----*/


const keysEls = document.querySelectorAll('.key')
const wordEls = document.querySelector('#guess-word')
const hintEls = document.querySelector('#word-hint')
const chancesEls = document.querySelector('#chances-count')
const dogImg = document.getElementById('dog-img')
const alienImg = document.getElementById('alien-img')
const statusImg = document.getElementById('status-img')
const resetEls = document.getElementById('reset-btn')
const body = document.querySelector('body')

//modals

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const openModalBtn = document.querySelector(".btn-open")
const closeModalBtn = document.querySelector(".btn-close")
const statusModal = document.querySelector(".status-modal")
const statusMessage = document.querySelector(".status-msg")




// /*-------------- Functions -------------*/


 function init(){

    let stringFromFile =  getArrayOfWords(wordlist) 
    // splits the string into 2 and removes |
    let parts = stringFromFile.split('|')

    // assigns word and hint and removes the whitespace
    hiddenWord = parts[0].trim()
    hint = parts[1].trim()

    //initialize guessWord with underlines
    for (let i = 0; i < hiddenWord.length; i++){
        guessedWord[i] = "_";
    }

    playerChances = max_chances
    // this will be used in the checkChances func, ensures the audio has played only once
    audioHasPlayed = false 

    render()
}


// computes a random number from 0 to wordList.length - 1 and retuns a random string fr wordlist
function getArrayOfWords(wordlist){
    return wordlist[Math.floor(Math.random() * wordlist.length)]
}


function render(){
    wordEls.textContent = guessedWord.join(' ')
    hintEls.textContent = hint
    chancesEls.textContent = `Chances: ${playerChances}/${max_chances}`
}
  

function handleClick(event){

    playerChoice = event.target.id
    event.target.classList.add("key-clicked")
    buttonclick.play()

        // if the key clicked is equal to any char in the hiddenWord
        if (hiddenWord.includes(playerChoice)){

            // hidden word will turn into an array of indivual characters and 
            // will loop through the individual characters until it finds one
            // that matches the key pressed
            hiddenWord.split('').forEach((letter, idx) => {
                if (letter === playerChoice){
                    guessedWord[idx] = playerChoice
                }
            });
        } 
        else{
            // playerchances will be decremented 
            playerChances -= 1
           
        }

    checkChances()
    checkWin()
    render()

}

//hint for temporary use only
function checkWin (){
 
    statusModal.classList.add('animate__animated', 'animate__bounceInDown');

    //player loses the game
    if (playerChances === 0 && hiddenWord !== guessedWord){
        statusModal.classList.remove("hide-status")
        overlay.classList.remove("hidden")
        statusImg.src = "./img/hondacrying.png"
        dogImg.src = "./img/honda.png"
        dogImg.classList.add('animate__animated', 'animate__fadeOutUpBig')
        alienImg.classList.add('animate__animated', 'animate__fadeOutUpBig')
        statusMessage.textContent = lost_message
        body.style.backgroundImage = 'url(./img/gameoverbg.svg)' 
        gameover.play()

    // player win
    } else if (playerChances > 0 && hiddenWord === guessedWord.join('')){
        statusModal.classList.remove("hide-status")
        overlay.classList.remove("hidden")
        dogImg.src = "./img/hondawin.png"
        alienImg.style.display = 'none'
        statusMessage.textContent = win_message
        wingame.play()
    }
}

function checkChances(){
    if (playerChances === 1){

        dogImg.src = './img/hondachance.png' // Honda's warning image 
        alienImg.style.display = 'block' // alienship will appear 

        if (audioHasPlayed === false){
            warningBark.play()
            alienenters.play()
            audioHasPlayed = true
        }   

    } 
}

function resetGame(){


    guessedWord = [] // initializing into empty array again to avoid overlapping fr prev word

    init() // initalizes the game

    keysEls.forEach(key => { //removes the color of the keys
        key.classList.remove("key-clicked")
    })

    //reverts back to the original state
    dogImg.src = './img/honda.png'
    alienImg.style.display = 'none'
    statusModal.classList.add("hide-status")
    overlay.classList.add("hidden")
    dogImg.classList.remove('animate__animated', 'animate__fadeOutUpBig')
    alienImg.classList.remove('animate__animated', 'animate__fadeOutUpBig')
    body.style.backgroundImage = 'url(./img/gamebg.svg)' 

    gameover.pause() // immediately stops background music when reset is clicked

}

function playBgMusic(){
    bgmusic.loop = true 
    bgmusic.volume = 0.1
    bgmusic.play()
}

const openHowToModal = function () {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
    modal.classList.add('animate__animated', 'animate__bounceInDown');
    buttonclick.play()
}
const closeHowToModal = function() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

/*----------- Event Listeners ----------*/

init()
playBgMusic()


keysEls.forEach(key => {
    key.addEventListener('click', handleClick);
})

openModalBtn.addEventListener('click', openHowToModal);
closeModalBtn.addEventListener('click', closeHowToModal);
resetEls.addEventListener('click', resetGame);


