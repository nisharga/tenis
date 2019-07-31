var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');
var reset = document.querySelector('.reset');
var input = document.querySelector('.input');
var inputValue = input.value;
var h1 = document.querySelector('.boss');
var p1score = 0;
var p2score = 0;
var player1Display = document.querySelector('.p1dis');
var player2Display = document.querySelector('.p2dis');
var displayscore = document.querySelector('.ws');
var winningScore = parseInt(inputValue);
displayscore.innerHTML = winningScore; 
var gameOver = false;

//console.log(player1);

player1.addEventListener('click', function(){
    if(!gameOver){
        p1score++;
        if(p1score === winningScore){
       player1Display.classList.add('green'); 
        gameOver = true;
        alert("Player 1 win!");
        }
    }
    player1Display.innerHTML = p1score;
}, false);


player2.addEventListener('click', function(){
    if(!gameOver){
        p2score++;
        if(p2score === winningScore){
        player2Display.classList.add('green');
        gameOver = true;
        alert("Player 2 win!");
        }
    }
    player2Display.innerHTML = p2score;
}, false);

function restrat(){
    p1score = 0;
    p2score = 0; 
    player1Display.innerHTML = p1score;
    player2Display.innerHTML = p2score;
    player1Display.classList.remove('green');
    player2Display.classList.remove('green');
    gameOver = false;
}
reset.addEventListener('click', function(){
    restrat();
}, false);


input.addEventListener('change', function(){
    winningScore = Number(input.value);
    ws.innerHTML = input.value;
},false);