function computerPlay() {
    let randomIndex = Math.floor(Math.random() * 4);
    switch(randomIndex) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return null;
    }
}

function playerSelection(){
    let selectionString = prompt("Rock, paper or scissors:", "");
    selectionString = selectionString.toLowerCase();

    switch(true){
        case selectionString === "rock":
            return "rock";
            break;
        case selectionString === "paper":
            return "paper";
            break;
        case selectionString === "scissors":
            return "scissors";
            break;
        default:
            return null;
            break;
    }
}