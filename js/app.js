
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


const keys = document.querySelectorAll('.key')
const keyboard = document.querySelectorAll('#keyboard')

keys.forEach(key => {
    key.addEventListener('click', (event) =>{
        console.log(event.target.id)
    })
})


// /*-------------- Functions -------------*/

async function init (){


    let stringFromFile = await getArrayOfWords() 
    // splits the string into 2 and removes |
    let parts = stringFromFile.split('|')

    // assigns first part of string wc is the word and removes the whitespace
    hiddenWord = parts[0].trim()
    console.log(hiddenWord)
     // assigns second part of string wc is the hint and removes the whitespace
    hint = parts[1].trim()
    console.log(hint) 

    playerChances = max_chances
    playerLost = false
}

async function getArrayOfWords() {
    //gets a random string from the file wordlist.txt 
    // format : word | hint:...
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




