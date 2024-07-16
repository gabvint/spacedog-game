
/*-------------- Constants -------------*/
const warning_message = 'Arf, 1 chance left'
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
let playerLost


/*----- Cached Element References  -----*/


const keysEls = document.querySelectorAll('.key')
const wordEls = document.querySelector('#guess-word')
const hintEls = document.querySelector('#word-hint')
const chancesEls = document.querySelector('#chances-count')
const dogImg = document.getElementById('dog-img')
const alienImg = document.getElementById('alien-img')
const statusImg = document.getElementById('status-img')
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

    // console.log(guessedWord.length)
    console.log(hiddenWord)
    // console.log(hint)

    playerChances = max_chances
    playerLost = false

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

        if (hiddenWord.includes(playerChoice)){

            hiddenWord.split('').forEach((letter, idx) => {
                if (letter === playerChoice){
                    guessedWord[idx] = playerChoice
                }
            });
        } 
        else{
            
            playerChances -= 1
            console.log(playerChances)
        }
           
    
    console.log(playerChoice)

    checkChances()
    checkWin()
    render()

}

//hint for temporary use only
function checkWin (){
    if (playerChances === 0 && hiddenWord !== guessedWord){
        statusModal.classList.remove("hide-status")
        overlay.classList.remove("hidden")
        statusMessage.textContent = lost_message
        statusImg.src = "./img/hondacrying.png"

    } else if (playerChances > 0 && hiddenWord === guessedWord.join('')){
       dogImg.src = './img/hondawin.png'
       alienImg.style.display = 'none'
       statusMessage.textContent = win_message
    }
}

function checkChances(){
    if (playerChances === 1){
        dogImg.src = './img/hondachance.png'
        alienImg.style.display = 'block'
    } 
}


const openHowToModal = function () {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
const closeHowToModal = function() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

/*----------- Event Listeners ----------*/

init()

keysEls.forEach(key => {
    key.addEventListener('click', handleClick);
})

openModalBtn.addEventListener('click', openHowToModal);
closeModalBtn.addEventListener('click', closeHowToModal);


// console.dir(keyboard)
// console.dir(letter)




