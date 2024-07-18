/*----- Variables  -----*/

let backgroundmusic = new Audio("./audio/backgroundmusic.mp3")
let buttonclick = new Audio("./audio/buttonclick.mp3")
backgroundmusic.loop = true

/*----- Cached Element References  -----*/

const startPageContainer = document.getElementById('start-container');
const howToBtn = document.getElementById('how-to-btn')

/*----------- Function ----------*/

function clickSound(){
    buttonclick.play()
}

function changeContent(){
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

howToBtn.addEventListener('click', clickSound)
howToBtn.addEventListener('click', changeContent)