'use strict';

let randomNumber = Math.trunc((Math.random()*20))+1  // taking any random no. for game between 1 to 20
// console.log(randomNumber);

const displayMessage = function(message){  // displayMessage func to change the message class value  
    document.querySelector('.message').textContent = message;
}

//check button
document.querySelector('.check').addEventListener('click', () => {  // eventlistener on check button
    
    const guess_no = document.querySelector('.guess').value;     // geting value from guess input box
    let score = Number(document.querySelector('.score').textContent)  // default score 20

    if(!guess_no){                      
        displayMessage('⛔No Number');
    }

    else if(guess_no == randomNumber){              // if guess no and random no is eqaul than player won
        displayMessage('🎉Correct Answer🏆');
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('body').style.background = '#18a602';
        let highScore = 0;
        if(score > highScore){
            document.querySelector('.highscore').textContent = score;
        }
    }
    
    else if(guess_no !== randomNumber){
        if(score > 1){                  // score will decrease one by one with worng guessings
            displayMessage(guess_no > randomNumber ? 'Too high 📈' : 'Too low 📉');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.score').textContent = 0;
            displayMessage('Game Over👎');
            document.querySelector('body').style.background = '#a80000';
        }
    }
});

// again button
document.querySelector('.again').addEventListener('click', () => {
    randomNumber = Math.trunc((Math.random()*20))+1;
    console.log(randomNumber);
    displayMessage('start guessing...');
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.background = '#222';

});