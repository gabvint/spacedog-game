
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


const keysEls = document.querySelectorAll('.key')
const keyboardEls = document.querySelectorAll('#keyboard')
const wordEls = document.querySelector('.word')

keysEls.forEach(key => {
    key.addEventListener('click', (event) =>{
        console.log(event.target.id)
    })
})


// /*-------------- Functions -------------*/

async function init (){

    let stringFromFile = await getArrayOfWords() 
    // splits the string into 2 and removes |
    let parts = stringFromFile.split('|')

    // assigns word and hint and removes the whitespace
    hiddenWord = parts[0].trim()
    hint = parts[1].trim()

    playerChances = max_chances
    playerLost = false

}

async function getArrayOfWords() {
    try {
        let response = await fetch('wordlist.txt');
        let data = await response.text();
        const wordsArray = data.split('\n');
        let index = Math.floor(Math.random() * wordsArray.length);
        return wordsArray[index];
    } catch (err) {
        console.log("error");
    }
}

 



/*----------- Event Listeners ----------*/

init()



// console.dir(keyboard)
// console.dir(letter)




