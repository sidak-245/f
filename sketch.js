var bg;
var charcter1,charcter2;
var database,game,player,form;
var gameState,playerCount
function preload (){
    bg = loadImage("./images/fightbg.png")
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    console.log(database)
    game.start();
  }
  
  
  function draw(){
      
    if(playerCount === 2){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
    if(gameState === 2){
      game.end();
    }
  }