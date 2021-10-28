class Game {
    constructor(){
  
    }
  
    getState(){
        console.log(";ugyvyvyb")
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    console.log(gameState)
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          console.log("llllll")
          form = new Form()
          form.display();
        }
    }

}