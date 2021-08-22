'use strict';

let score = 20;

let highScore = 0;
let magicNumber = Math.trunc(Math.random() * 20) + 1;



document.querySelector('.check').addEventListener('click', function ()
{
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (score > 1)
    {
        if (!guess && guess !== 0)
        {
            document.querySelector('.message').textContent = '⛔No Number';
        }
        else if (guess === magicNumber)
        {
            document.querySelector('.message').textContent = '🎉Correct Number';

            document.querySelector('body').style.backgroundColor = '#32CD32'
            document.querySelector('.number').style.width = '30rem';

            if (score > highScore)
            {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
        else if (guess > magicNumber && guess <= 20)
        {
            document.querySelector('.message').textContent = '📈Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (guess < magicNumber && guess >= 0)
        {
            document.querySelector('.message').textContent = '📉Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (guess < 0 || guess > 20)
        {
            document.querySelector('.message').textContent = '😒Input Numbers between 0 and 20 only';
        }
    }
    else
    {
        document.querySelector('.message').textContent = '💥You lost the Game!!!';
        score = 0;
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '	#ff0000'
        document.querySelector('.number').style.width = '30rem';
    }
})

document.querySelector('.again').addEventListener('click', function ()
{
    score = 20;
    magicNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
