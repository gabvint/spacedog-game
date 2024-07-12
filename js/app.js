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

const letter = document.querySelectorAll('.key')
const keyboard = document.querySelectorAll('#keyboard')



/*-------------- Functions -------------*/

const init = () => {
    hiddenWord = getHiddenWord(); 
    hint = getHint();   
    playerChances = max_chances
    playerLost = false
}

async function getHiddenWord(){
    let data;
    let wordArray;
    let hiddenWord
    const fs = require('fs').promises

    try {
        data = await fs.readFile('wordlist.txt', 'utf-8')
        wordArray = data.split('\n')
        console.log(wordArray.length)
    } catch (err){
        console.log("error getting file")
    }


}

const getHint = () => {

}

/*----------- Event Listeners ----------*/

getHiddenWord()



// console.dir(keyboard)
// console.dir(letter)

// letter.forEach(key => {
//     key.addEventListener('click', (event) =>{
//         console.log(event.target.id)
//     })
// })

// const fs = require('fs').promises;

// async function readFileAndConvertToArray() {
//     try {
//         let data = await fs.readFile('wordlist.txt', 'utf8');
//         const wordsArray = data.split('\n');
//         console.log(wordsArray[2]); // Output: [ 'apple', 'banana', 'cherry', 'date', 'elderberry' ]
//     } catch (err) {
//         console.log("error");
//     }
// }



