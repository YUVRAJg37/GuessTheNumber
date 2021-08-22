'use strict';

let score = 20;

let highScore = 0;
let magicNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message)
{
    document.querySelector('.message').textContent = message;
}

const bodyColor = function (color)
{
    document.querySelector('body').style.backgroundColor = color;
}

const scoreMessage = function (score)
{
    document.querySelector('.score').textContent = score;
}

const width = function (num)
{
    document.querySelector('.number').style.width = num;
}

document.querySelector('.check').addEventListener('click', function ()
{
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (score > 1)
    {
        if (!guess && guess !== 0)
        {
            displayMessage('⛔No Number');
        }
        else if (guess === magicNumber)
        {
            displayMessage('🎉Correct Number');

            bodyColor('#32CD32');
           width('30rem');

            if (score > highScore)
            {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
        else if (guess > magicNumber && guess <= 20)
        {
            displayMessage('📈Too High');
            score--;
            scoreMessage(score);
        }
        else if (guess < magicNumber && guess >= 0)
        {
            displayMessage('📉Too Low');
            score--;
            scoreMessage(score);
        }
        else if (guess < 0 || guess > 20)
        {
           displayMessage('😒Input Numbers between 0 and 20 only');
        }
    }
    else
    {
        displayMessage('💥You lost the Game!!!');
        score = 0;
        scoreMessage(0);
        bodyColor('#ff0000');
        width('30rem');
    }
})

document.querySelector('.again').addEventListener('click', function ()
{
    score = 20;
    magicNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    scoreMessage(20);
    document.querySelector('.guess').value = '';
    bodyColor('#222');
    width('15rem');
})

