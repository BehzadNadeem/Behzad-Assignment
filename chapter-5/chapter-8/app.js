let btn = document.getElementById('btn');
let win_loss = document.getElementById('win_loss');
let levelText = document.getElementById('levelText');
let userWins = 0;
let currentLevel = 1;

btn.addEventListener('click', function () {
    let user_num = parseInt(document.getElementById('user_num').value);
    let range = getRange(currentLevel); // Get the range for the current level

    let random_num = generateRandomNumber(range.min, range.max);
    // document.getElementById("min , 1 to 10").innerHTML=range.min;
document.getElementById('min').innerHTML = range.min;
document.getElementById('max').innerHTML = range.max;
    if (user_num === random_num) {
        win_loss.style.color = "green";
        win_loss.innerHTML = "Winner!";
        userWins++;
    } else {
        win_loss.style.color = "red";
        win_loss.innerHTML = "Loser!";
    }

    if (currentLevel >= 10) {
        if (userWins >= 3) {
            win_loss.innerHTML += " Congratulations! You win the game!";
        } else {
            win_loss.innerHTML += " Sorry! You lose the game!";
        }
        btn.disabled = true;
    } else {
        
        levelText.innerHTML = currentLevel++;
    }

    setTimeout(() => {
        win_loss.innerHTML = "";
        document.getElementById('user_num').value = ""; // Clear the input field
    }, 2000);
});

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRange(level) {
    switch (level) {
        case 1:
            return { min: 1, max: 10 };
        case 2:
            return { min: 11, max: 20 };
        case 3:
            return { min: 21, max: 30 };
        case 4:
            return { min: 31, max: 40 };
        case 5:
            return { min: 41, max: 50 };
        case 6:
            return { min: 51, max: 60 };
        case 7:
            return { min: 61, max: 70 };
        case 8:
            return { min: 71, max: 80 };
        case 9:
            return { min: 81, max: 90 };
        case 10:
            return { min: 91, max: 100 };
        default:
            return { min: 1, max: 10 }; // Default to level 1 range
    }
}
