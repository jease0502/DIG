var gameStartBtn = document.getElementById('start-btn');
var startStage = document.getElementsByClassName('Start-stage')[0]
var readyTimeTxt = document.getElementsByClassName('ready-time')[0]
var gameTimeTxt = document.getElementsByClassName('game-time')[0]
var player = document.getElementsByClassName('play-btn')[0]
var overText = document.getElementsByClassName('Text')[0]
var PlayerStage = document.getElementsByClassName('Play-stage')[0]
var resetBtn = document.getElementById('reSet')
var closeTimer;
var closeGameTimer;
var readyTime;
var gameTime;
var clickInt;
function Init(){
    readyTime = 3;
    gameTime = 10;
    clickInt = 0;
    readyTimeTxt.innerHTML = readyTime;
    gameTimeTxt.innerHTML = 'Game Time：' + gameTime
}
Init();
function StartGame(){
    startStage.classList.add("hidden")
    closeTimer = setInterval(function(){
        readyTime -= 1;
        readyTimeTxt.innerHTML = readyTime;
        if(readyTime <= 0){
            clearInterval(closeTimer)
            readyTimeTxt.classList.add('hidden');
            GamePlayer();
        }
    }, 1000)
}
function GamePlayer(){
    closeGameTimer = setInterval(function(){
        gameTime -= 1
        gameTimeTxt.innerHTML = 'Game Time：' + gameTime
        if(gameTime <= 0){
            clearInterval(closeGameTimer)
            player.removeEventListener('click', addClickInt);
            GameOver();
        }
    }, 1000)
    player.addEventListener('click', addClickInt)
}
function addClickInt(){
    clickInt++;
    console.log(clickInt);
}
function GameOver(){
    PlayerStage.classList.add('hidden');
    if(clickInt > 50){
        overText.innerHTML = '恭喜過關';
    }else{
        overText.innerHTML = '嫩!連50都沒有';
    }
    resetBtn.addEventListener("click", function(){
        // window.location.reload();
        Init();
        resetDom();
    })
}
function resetDom(){
    startStage.classList.remove("hidden")
    readyTimeTxt.classList.remove('hidden');
    PlayerStage.classList.remove('hidden');
}
gameStartBtn.addEventListener('click', function(){
    StartGame()
})


