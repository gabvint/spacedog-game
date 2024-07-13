const { Console } = require('console')
const { read } = require('fs')

/*-------------- Constants -------------*/
const warning_message = 'Arf, 1 chance left'
const win_message = "Hey, you won!"
const lost_message = "Awww"
const max_chances = 5

/*---------- Variables (state) ---------*/

let hiddenWord
let guessedWord
let hint
let playerChoice 
let playerChances 
let playerLost




/*----- Cached Element References  -----*/


// const letter = document.querySelectorAll('.key')
// const keyboard = document.querySelectorAll('#keyboard')



// /*-------------- Functions -------------*/

async function init (){

    let stringFromFile = await getArrayOfWords()
    let parts = stringFromFile.split('|')

    hiddenWord = parts[0].trim()

    console.log(hiddenWord)

    hint = parts[1].trim()

    console.log(hint) 
    
    playerChances = max_chances
    playerLost = false
}

async function getArrayOfWords() {

    const fs = require('fs').promises; 
    let index; 
    try {

        let data = await fs.readFile('wordlist.txt', 'utf8');

        const wordsArray = data.split('\n') //makes it to an array
        index = Math.floor( Math.random() * wordsArray.length)

        return wordsArray[index]

    } catch (err) {
        console.log("error");
    }

}


/*----------- Event Listeners ----------*/

init()



// console.dir(keyboard)
// console.dir(letter)

// letter.forEach(key => {
//     key.addEventListener('click', (event) =>{
//         console.log(event.target.id)
//     })
// })



