let userScore = 0;
let comScore = 0;
const userScore_span = document.getElementById("user-score");
const comScore_span = document.getElementById("com-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}


function win(userChoice, comChoice) {
    userScore++
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComWord = "com".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(comChoice)}${smallComWord}. You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')}, 500);
}

function lose(userChoice, comChoice) {
    comScore++
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComWord = "com".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(comChoice)}${smallComWord}. You Lost!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')}, 500);
}

function draw(userChoice, comChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallComWord = "com".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(comChoice)}${smallComWord}. It's a Draw!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow')}, 500);
}

function game(userChoice) {
    const comChoice = getComChoice();
    switch (userChoice + comChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, comChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, comChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, comChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    }) 

    paper_div.addEventListener('click', function() {
        game("p");
    }) 

    scissors_div.addEventListener('click', function() {
        game("s");
    }) 
}

main();