
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

function playRound(comChoice,humanChoice){
    let ress;
    if(computerScore<5 && humanScore<5){
    let humanChoice1=humanChoice.toLowerCase();
    
    if(comChoice==humanChoice1){
        ress= "game draw";
    }
    if(comChoice=="rock" && humanChoice1=="scissors" || comChoice=="scissors" && humanChoice1=="rock" ){
        if(comChoice=="rock"){
            computerScore++;
            ress="computer wins";
        }
        else{
            humanScore++;
            ress= "human wins";
        }
    }
    else{
        if(comChoice.length>humanChoice1.length){
            computerScore++;
            ress= "computer wins";
        }
        else{
            humanScore++;
            ress= "human wins";
        }
    }
}
    if(computerScore>=5 || humanScore>=5){
        return (humanScore==5)? "Finally human wins":"Finally computer wins";
    }
    else{
    return ress;
    }
    



}

const rockbtn=document.querySelector("#rockbtn");
const paperbtn=document.querySelector("#paperbtn");
const scissorbtn=document.querySelector("#scissorbtn");
const forres=document.querySelector("#forres");
rockbtn.addEventListener("click",()=>{
    let res=playRound(getComputerChoice(),"rock");
    forres.innerHTML=`${res}<br>computer score:${computerScore} | human score:${humanScore}`;
});
paperbtn.addEventListener("click",()=>{
    let res=playRound(getComputerChoice(),"paper");
    forres.innerHTML=`${res}<br>computer score:${computerScore} | human score:${humanScore}`;
});
scissorbtn.addEventListener("click",()=>{
    let res=playRound(getComputerChoice(),"scissors");
    forres.innerHTML=`${res}<br>computer score:${computerScore} | human score:${humanScore}`;
});

