
var playGame=function(){
    let humanScore=0;
    let computerScore=0;
    function getComputerChoice(){
        let num = Math.floor(Math.random()*10);
        if(num>=0 && num<3){
            return "Rock";
        }
        else if(num>=3 && num<6) {
            return "Paper";
        }
        else {
            return "Scissors";
        }
    }
    function getHumanChoice(){
        let userInput = prompt("Choose! ");
        return userInput;
    }
    function playRound(humanChoice, computerChoice){
        let hc=humanChoice.toLowerCase();
        let cc=computerChoice.toLowerCase();
        console.log("Your Choice: "+hc+" ; "+"Computer's Choice: "+cc);
        if(hc===cc){
         console.log("Who cares its a draw!");
        }
        else if((hc=="rock"&&cc=="paper")||(hc=="paper"&&cc=="scissors")||(hc=="scissors"&&cc=="rock")){
         computerScore++;
         console.log("You lose!");
        }
        else {
         humanScore++;
         console.log("You Won!");
        }
     }
     let humanSelect1=getHumanChoice();
     let computerSelect1=getComputerChoice();
     playRound(humanSelect1, computerSelect1);
     let humanSelect2=getHumanChoice();
     let computerSelect2=getComputerChoice();
     playRound(humanSelect2, computerSelect2);
     let humanSelect3=getHumanChoice();
     let computerSelect3=getComputerChoice();
     playRound(humanSelect3, computerSelect3);
     let humanSelect4=getHumanChoice();
     let computerSelect4=getComputerChoice();
     playRound(humanSelect4, computerSelect4);
     let humanSelect5=getHumanChoice();
     let computerSelect5=getComputerChoice();
     playRound(humanSelect5, computerSelect5);
     if(humanScore>computerScore){
        return `You've won the round by ${humanScore-computerScore} point!`;
     }
     else if(humanScore<computerScore){
        return `You've lost the round by ${computerScore-humanScore} point.`;
     }
     else{
        return `The is a draw, Computer's Score: ${computerScore} Your Score: ${humanScore}`;
     }
}

console.log(playGame());
