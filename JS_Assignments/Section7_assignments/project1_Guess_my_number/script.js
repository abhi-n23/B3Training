'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.scor').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    } else if (guess === secretnumber) {
        document.querySelector('.message').textContent = 'Correct number!';

        document.querySelector('body').style.backgroundColor = 'green';

        document.querySelector('.number').textContent = secretnumber;

        document.querySelector('.number').style.width = '30rem';


        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretnumber) {
        
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretnumber ? 'Too high!' : 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You loose the game!';
                document.querySelector('.score').textContent = 0;
                
                document.querySelector('body').style.backgroundColor = 'red';
            }

    }
    
    // else if (guess > secretnumber) {

    //     if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You loose the game!';
    //         document.querySelector('.score').textContent = 0;
            
    //         document.querySelector('body').style.backgroundColor = 'red';
    //     }
        
    // } else if (guess < secretnumber) {
        
    //         if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = 'You loose the game!';
    //             document.querySelector('.score').textContent = 0;
    //             document.querySelector('body').style.backgroundColor = 'red';
    //         }
    // }
});

document.querySelector('.new--game').addEventListener('click', function () {

    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});