// Selecting all the required elements 
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const btn = document.querySelector(".btn");
const start = document.querySelector(".start");

let lastHole;
let timeUp = 0;
let score  = 0;

//math.ramdom which give random number between 0 to 1;
function randomTime(max,min){
//    console.log(Math.random(max)) ;
//    console.log(Math.round(Math.random() * (max-min)+min))
   return Math.round(Math.random() * (max-min)+min) 
}

// console.log(Math.floor(Math.random()* holes.length))  // it will give random num between 0 to holes length
function randomHole(holes){
    const index = Math.floor(Math.random()* holes.length);
    const hole = holes[index];
    if(hole == lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep(){
    const time = randomTime(400,1000);
    const hole = randomHole(holes);
    hole.classList.add("up"); // mouse surrounded class
    setTimeout(() => {
        hole.classList.remove("up");
        if(!timeUp) peep(); 
    }, time);
}

function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => {
        timeUp = true;
        btn.textContent = "Restart"; 
        alert("Times Up play again !");
    },15000);
    btn.textContent =""; 

}

// 
function whack(e){
   if(!e.isTrusted) return;
   score ++;
   console.log(score);
   this.parentNode.classList.remove('up');
   scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', whack));

// to close the instruction

function closeInstruction(){
    document.querySelector("#close")
    .addEventListener("click",function(){
        document.querySelector(".overlay").style.display  = "none";
    })
}
closeInstruction();
