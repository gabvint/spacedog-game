
/*-------------- Constants -------------*/
const warning_message = 'Arf, 1 chance left'
const win_message = "Hey, you won!"
const lost_message = "You lost!"
const max_chances = 5


const wordlist = [
'nebula | Hint: Cloud of gas and dust in space.',
'galaxy | Hint: Massive system of stars, planets, and other celestial bodies.',
'comet  | Hint: Icy body that releases gas and dust, forming a tail.',
'meteor | Hint: Space rock that burns up in Earth\'s atmosphere.',
'asteroid | Hint: Small rocky body orbiting the sun.',
'blackhole | Hint: Region of space with strong gravitational pull, nothing can escape.',
'exoplanet | Hint: Planet outside our solar system.',
'supernova | Hint: Explosive death of a star.',
'quasar | Hint: Extremely bright and distant active galactic nucleus.',
'cosmos | Hint: The universe seen as a well-ordered whole.',
'satellite | Hint: Man-made object orbiting a planet.',
'orbit | Hint: Path of a celestial body around a star, planet, or moon.',
'spacesuit | Hint: Worn by astronauts to survive in space.',
'lightyear | Hint: Distance light travels in one year.',
'astrolabe | Hint: Ancient instrument used to observe and calculate the position of celestial bodies.',
'pulsar | Hint: Highly magnetized, rotating neutron star that emits beams of electromagnetic radiation.',
'andromeda | Hint: Nearest spiral galaxy to the Milky Way.',
'solarflare | Hint: Sudden burst of radiation from the sun\'s surface.',
'telescope | Hint: Instrument used to observe distant objects in space.'
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
//modals
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const openModalBtn = document.querySelector(".btn-open")
const closeModalBtn = document.querySelector(".btn-close")


// /*-------------- Functions -------------*/


const openHowToModal = function () {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
const closeHowToModal = function() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}
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
    // console.log(hiddenWord)
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

    checkWin()
    checkChances()
    render()

}

//hint for temporary use only
function checkWin (){
    if (playerChances === 0 && hiddenWord !== guessedWord){
        hint = lost_message
    } else if (playerChances > 0 && hiddenWord === guessedWord.join('')){
        hint = win_message
    }
}

function checkChances(){
    if (playerChances === 1){
        dogImg.src = './img/hondachance.png'
    }
}


/*----------- Event Listeners ----------*/

init()

keysEls.forEach(key => {
    key.addEventListener('click', handleClick);
})

openModalBtn.addEventListener('click', openHowToModal);
closeModalBtn.addEventListener('click', closeHowToModal);
overlay.addEventListener('click', closeHowToModal);

// console.dir(keyboard)
// console.dir(letter)




