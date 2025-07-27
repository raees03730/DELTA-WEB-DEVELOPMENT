let gameSeq=[];
let userSeq=[];

let btns =["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// start the game

document.addEventListener("keypress", function () {
    if (!started) {
    started = true;
    levelUp();
    }
});

// flash effect for game

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);

}

// flash effect for user click

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}    

// increase level and show random button

function levelUp () {
    userSeq =[];
    level++;
    h2.innerText = 'Level ${level}';

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector('#${randColor}');
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

//handle button click

function btnpress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id")
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

//check answer

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = 'Game Over! your score was <b>${level}</b> <br> press any key to start.';
        document.querySelector("body").style.backgroundcolor ="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundcolor = "white";

        }, 150);
        reset();
    }
}
//reset game

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

//add event listener to all buttons

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnpress);
}