//Gets the users selection

let userSelection = prompt("rock, paper or scissors?");

//Randomly generate a number 

let computerSelection = Math.random();                        

//Conditional logic goes here to determine the computers selection

if (computerSelection < 0.33) {
  computerSelection = "rock";

} else if (computerSelection <= 0.66) {
  computerSelection = "paper";

} else {
  computerSelection = "scissors";
}

console.log(computerSelection);


//Function to compare the userSelection and the computerSelection to determine the winner
var compare=function(selection1,selection2){
    if(selection1===selection2){
        return "It was a tie!";
    }

    else if(selection1==="rock"){
        if(selection2==="paper"){
            return "paper wins"
        }
        else if(selection2==="scissors"){
            return "rock wins";
        }
    }

    else if(selection1==="paper"){
        if(selection2==="scissors"){
            return "scissors win"
        }
        else if(selection2==="rock"){
            return "paper wins";
        }
    }

    else if(selection1==="scissors"){
        if(selection2==="paper"){
            return "scissors win"
        }
        else if(selection2==="rock"){
            return "rock wins";
        }
    }    
}
 //call the function to compare and display result
console.log(compare(userSelection,computerSelection));