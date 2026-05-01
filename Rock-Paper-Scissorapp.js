let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");

const compscorepara= document.querySelector("#comp-score");


const getcompchoice = function(){ //computer ka randome choice generate krna----------------------------
    let options =["rock", "paper", "scissors"];
    let randomeIdx= Math.floor(Math.random()*3);// random optioins generate krne ke liye------
    return options[randomeIdx];
};

const drawgame = function(){
    msg.textContent = "Game was Draw.Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin)=>{ //Winner decide krke score update krna
    if(userWin){
        userscore++
        userscorepara.innerText = userscore;
        msg.innerText = "you Win!";
        msg.style.backgroundColor = "green";
    }else{
        compscore++
        compscorepara.innerText = compscore;
        msg.textContent = "You lose.";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice)=>{
    //generate computer choice
    const compchoice = getcompchoice();

    if(userchoice === compchoice){
        drawgame();   //draw game
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            //paper,scissors
            userWin = compchoice === "paper" ? false: true;
        }else if(userchoice === "paper"){
            //rock, scissors
            userWin = "scissors" ? false: true;
        }else{
            //rock,paper
            userWin = compchoice ==="rock" ? false :true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
       playGame(userchoice);

    });
});


















