let gameElement = [];
let userElement = [];
let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0 ; 
let highestLevel = 0;
let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function() {
    if(started == false){
        console.log("started");
        started = true;

        levelUp();
    }
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    } , 200);
}

function levelUp() { 
    userElement = [];
    level++ ;
    h3.innerText = `Level ${level}`

    let randidx = Math.floor(Math.random() * 3);
    let randColor = btns[randidx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameElement.push(randColor);
    console.log(gameElement);
    btnFlash(randbtn);
}



function checkAns(idx) {
    if (userElement[idx] === gameElement[idx]) {
        if(userElement.length == gameElement.length){
            setTimeout(levelUp(),1000);
        }
    } else{
        h3.innerHTML = `Game is over , Your score was <b>${level}<b/> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        } , 150)
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userElement.push(userColor);

    checkAns(userElement.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset() {
    started = false;
    level = 0;
    gameElement = [];
    userElement = [];
}