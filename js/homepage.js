/*----- Variables  -----*/

let backgroundmusic = new Audio("./audio/backgroundmusic.mp3")
let buttonclick = new Audio("./audio/buttonclick.mp3")
backgroundmusic.loop = true // loops the background music 

/*----- Cached Element References  -----*/

const startPageContainer = document.getElementById('start-container');
const howToBtn = document.getElementById('how-to-btn')

/*----------- Function ----------*/

function playMusic(){
    backgroundmusic.play().catch(error => {
        // Handle any errors that occur if the browser blocks autoplay
        console.log('Autoplay was prevented. User interaction is required to play music.');
    });
}

function changeContent(){ // this function changes the content of the startPageContainer element
    startPageContainer.innerHTML = `

    <div class="welcome-title">WELCOME TO SPACEDOG</div>
    <div class="instructions">
        <p>an intergalactic adventure where you must rescue Honda, the fearless pomeranian,
            from alien abduction! Picture the scene: an alien spaceship hovers ominously, 
            intent on capturing Honda. Your mission is clear: 
            guess the hidden words themed around space to thwart their plans.
        </p>

        <p> Each word is shielded by blanks representing its letters. With just 5 chances 
            to guess the correct letters or the entire word, every decision counts.
            A correct guess reveals parts of the word, inching you closer to saving Honda. 
            But be careful! Incorrect guesses bring the alien ship menacingly closer,
            threatening Honda's safety.</p>

        <a class="play-btn2" href="main.html">Play Game</a>
    </div>

    `;


}
/*----------- Event Listeners ----------*/

howToBtn.addEventListener('click', changeContent)

//when user clicks anything on homepage music will be played 
// for some reason when I open live server sometimes it will not be played automatically
document.addEventListener('click', playMusic)

playMusic()
