
/*-------------- Constants -------------*/
const warning_message = 'Arf, 1 chance left'
const win_message = "Hey, you won!"
const lost_message = "Awww"
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
let guessedWord
let hint
let playerChoice 
let playerChances 
let playerLost


/*----- Cached Element References  -----*/


const keysEls = document.querySelectorAll('.key')
const keyboardEls = document.querySelectorAll('#keyboard')
const wordEls = document.querySelector('#guess-word')
const hintEls = document.querySelector('#word-hint')

keysEls.forEach(key => {
    key.addEventListener('click', (event) =>{
        console.log(event.target.id)
    })
})


// /*-------------- Functions -------------*/

 function init (){

    let stringFromFile =  getArrayOfWords(wordlist) 
    // splits the string into 2 and removes |
    let parts = stringFromFile.split('|')

    // assigns word and hint and removes the whitespace
    hiddenWord = parts[0].trim()
    hint = parts[1].trim()
    guessedWord = "_ ".repeat(hiddenWord.length)
    console.log(guessedWord.length)
    console.log(hiddenWord)
    console.log(hint)
    playerChances = max_chances
    playerLost = false

    render()
}

function getArrayOfWords(wordlist) {
    return wordlist[Math.floor(Math.random() * wordlist.length)]
}


function render(){
    wordEls.textContent = guessedWord
    hintEls.textContent = hint
}
 



/*----------- Event Listeners ----------*/

init()



// console.dir(keyboard)
// console.dir(letter)




