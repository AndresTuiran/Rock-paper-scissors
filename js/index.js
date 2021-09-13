const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
let player1;

async function score (resultado) {
    alert("Ha " + resultado);
}

let rockButton = document.getElementById("rock");
rockButton.addEventListener("click", () =>{
    player1 = ROCK
    return player1
})
let paperButton = document.getElementById("paper")
paperButton.addEventListener("click",  () =>{
    player1 = PAPER
    return player1
})
let scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () =>{
    player1 = SCISSORS
    return player1
})
let startButton = document.getElementById("startPlay");
startPlay.addEventListener("click", startGame)
function showScissors(){
    rockImg1.style.display = "none";
    paperImg1.style.display = "none";
    scissorsImg1.style.display = "flex";
}
function showScissors2(){
    rockImg2.style.display = "none";
    paperImg2.style.display = "none";
    scissorsImg2.style.display = "flex";
}
function showRock(){
    rockImg1.style.display = "flex";
    paperImg1.style.display = "none";
    scissorsImg1.style.display = "none";
}
function showRock2(){
    rockImg2.style.display = "flex";
    paperImg2.style.display = "none";
    scissorsImg2.style.display = "none";
}
function showPaper(){
    rockImg1.style.display = "none";
    paperImg1.style.display = "flex";
    scissorsImg1.style.display = "none";
}
function showPaper2(){
    rockImg2.style.display = "none";
    paperImg2.style.display = "flex";
    scissorsImg2.style.display = "none";
}
function startGame(){
    let machineOption = Math.floor(Math.random() * 3)
    console.log(machineOption)
    if(player1 === undefined){
        alert("Porfavor escoja una opcion");
    }
    else if(player1 === machineOption){
        battleSection.style.display = "flex";
        if(player1 === ROCK){
            showRock();
            showRock2();
            
        }
        else if(player1 === PAPER){
            showPaper();
            showPaper2();
        }
        else if(player1 === SCISSORS){
            showScissors();
            showScissors2();
        }
        setTimeout(score("Empatado"),1000)
        player1 = undefined
    }
    else if(player1 === ROCK){
        battleSection.style.display = "flex";
        showRock();
        if(machineOption === 1){
            showPaper2();
            setTimeout(score("Perdido"),1000)
        }
        else if(machineOption === 2){
            showScissors2();
            setTimeout(score("Ganado"),1000)
        }
        player1 = undefined;
    }
    else if(player1 === PAPER){
        battleSection.style.display = "flex";
        showPaper();
        if(machineOption === 0){
            showRock2();
            setTimeout(score("Ganado"),1000)
        }
        else if(machineOption === 2){
            showScissors2();
            setTimeout(score("Perdido"),1000)
        }
        player1 = undefined;
    }
    else if(player1 === SCISSORS){
        battleSection.style.display = "flex";
        showScissors();
        if(machineOption === 0){
            showRock2()
            setTimeout(score("Perdido"),1000)
        }
        else if(machineOption === 1){
            showPaper2();
            setTimeout(score("Ganado"),1000)
        }
        player1 = undefined;
    }
}
