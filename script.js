
let computerScore=0;
let humanScore=0;
function getComputerChoice(){
    let choice=Math.random();
    if(choice>=0 && choice<=0.3){
        return "rock";
    }
    else if(choice>0.3 && choice<=0.7){
        return "paper";
    }
    else{
        return "scissors";
    }

}
function getHumanChoice(){
   let ch=prompt("enter your choice: ");
   return ch;
}
function playRound(comChoice,humanChoice){
    let humanChoice1=humanChoice.toLowerCase();
    if(comChoice==humanChoice1){
        return "game draw";
    }
    if(comChoice=="rock" && humanChoice1=="scissors" || comChoice=="scissors" && humanChoice1=="rock" ){
        if(comChoice=="rock"){
            computerScore++;
            return "computer wins";
        }
        else{
            humanScore++;
            return "human wins";
        }
    }
    else{
        if(comChoice.length>humanChoice1.length){
            computerScore++;
            return "computer wins";
        }
        else{
            humanScore++;
            return "human wins";
        }
    }
}
function playGame(){
    for(let i=0;i<5;i++){
let a=getComputerChoice();
console.log("computer choice is "+a);
let b=getHumanChoice();
console.log("your choice is "+b);
let c=playRound(a,b);
console.log(c);
    }
if(computerScore==humanScore){
    return "finally game draws with score "+computerScore+"-"+humanScore;
}
else if(computerScore>humanScore){
    return "finally computer wins with score "+computerScore+"-"+humanScore;
}
else{
    return "finally human wins with score "+computerScore+"-"+humanScore;
}
}
let final=playGame();
console.log(final);

