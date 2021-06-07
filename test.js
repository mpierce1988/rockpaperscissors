function computerPlay() {
    let randomIndex = Math.floor(Math.random() * 4);
    switch(randomIndex) {
        case 1:
            console.log("Computer picked Rock.");
            return "rock";
        case 2:
            console.log("Computer picked Paper.");
            return "paper";
        case 3:
            console.log("Computer picked Scissors.");
            return "scissors";
        default:
            return null;
    }
}

function playerPlay(){
    let selectionString = prompt("Rock, paper or scissors:", "");
    selectionString = selectionString.toLowerCase();

    switch(true){
        case selectionString === "rock":
            console.log("Player picked rock.");
            return "rock";
            break;
        case selectionString === "paper":
            console.log("Player picked paper.");
            return "paper";
            break;
        case selectionString === "scissors":
            console.log("Player picked scissors.");
            return "scissors";
            break;
        default:
            console.log("Player entered invalid answer.");
            return null;
            break;
    }
}

function playRound(playerSelection, computerSelection) {

}

