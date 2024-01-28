let box = document.querySelectorAll(".box");
const gamedraw = document.querySelector(".game-draw");
const gameover = document.querySelector(".game-over");
const game = document.querySelector(".game");
const playAgain = document.querySelectorAll(".play-again");
const resetBtn = document.querySelector("#reset-game");
const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turn = true;
let btnClicked = 0;

box.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turn){
            btn.textContent = "O";
            turn = false;
            btnClicked++;
        }else{
            btn.textContent = "X";
            turn = true;
            btnClicked++;
        }  
        btn.disabled = true;
        winner();
    })
});

let showWinner= (winner)=>{
    gameover.classList.remove("hide");
    gameover.innerHTML = `<h2>congress ${winner} Win</h2>
                        <button id="" class=" play-again btn" onclick="gameAgain()">Play Again </button>`;
    game.classList.add("hide");
    disableBtn();
    btnClicked = 0;
};

let winner = ()=>{
    for(pattern of winPattern){
        let position1 = box[pattern[0]].innerText;
        let position2 = box[pattern[1]].innerText;
        let position3 = box[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3){
                showWinner(position1);
            }
        }
    }
    if(btnClicked == 9){
        gamedraw.classList.remove("hide");
        game.classList.add("hide");
    }
};

let disableBtn = ()=>{
    for(btn of box){
        btn.disabled = true;
    }
};

let enableBtn = ()=>{
    turn = true;
    btnClicked = 0;
    for(btn of box){
        btn.disabled = false;
        btn.innerText = "";
    }
};
let gameAgain = ()=>{
    turn = true;
    gameover.classList.add("hide");
    gamedraw.classList.add("hide");
    game.classList.remove("hide");
    enableBtn();
    btnClicked = 0;
};

resetBtn.addEventListener("click",enableBtn);
playAgain.forEach((again)=>{
    again.addEventListener("click",gameAgain);
})