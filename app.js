const game = () => {
    let pScore = 0;
    let cScore = 0;
    const startGame = () => {
        const playBtn = document.querySelector('.intro Button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');


        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerrHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hands =>{
            hands.addEventListener('animationend',function(){
                this.style.animation = "";
            });
        });

        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(option => {
            option.addEventListener('click', function () {
                //computer Choise
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
              //here is were we call compare hands
              compareHand(this.textContent,computerChoice);


              setTimeout(() => {
                  //Update Images
              playerHand.src = `./assets/${this.textContent}.png`;
              computerrHand.src = `./assets/${computerChoice}.png`;

              playerHand.style.animation = 'shakeplayer 2s ease';
              computerrHand.style.animation = 'shakecomputer 2s ease';
              });
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHand = (playerChoice,computerChoice) => {
        //uodate Winner
        const winner = document.querySelector('.winner');
        //Checking For a Tie
        if(playerChoice === computerChoice){
            winner.textContent = `It's a TIE`;
            return;

        }
        //Check for Rock
        if (playerChoice === 'rock'){
            if (computerChoice === 'scissors'){
                winner.textContent = `Player Wins`;
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = `Computer Wins`;
                cScore++;
                updateScore();
                return;
            }
        }
        //Check Fro Paper
        if (playerChoice === 'paper'){
            if (computerChoice === 'scissors'){
                winner.textContent = `Computer Wins`;
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = `Player Wins`;
                pScore++;
                updateScore();
                return;
            }
        }
        //Check Fro Scissors
        if (playerChoice === 'scissors'){
            if (computerChoice === 'rock'){
                winner.textContent = `Computer Wins`;
                cScore++
                updateScore();
                return;
            }else{
                winner.textContent = `Player Wins`;
                pScore++;
                updateScore();
                return;
            }
        }


    };


    //Call all the inner Function 
    startGame();
    playMatch();


};

//start the game function

game();