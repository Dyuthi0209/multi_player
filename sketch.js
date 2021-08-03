var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var player_img;
var score=0;
var plastic, plasticGroup;
var bag1,bottle1,fertilizer,oil,rings,straw1,bag2,bottle2,straw2;
var play=1;
var end=2;
var gameOver, gameOverImg;
var invisiblePlat, invisiblePlat2;
var restart, restartImg;
var up, upImg;
var down, dowmImg;
var turtleImg
var bg;
var blowfish, blowfishimg;

function preload(){
  
  player_img = loadImage("images/turtle.png");

  bgImg=loadAnimation("images/background.png")

  bag1=loadImage("images/bag.png")
  bottle1=loadImage("images/bottle.png")
  fertilizer=loadImage("images/fertilizer.png")
  oil=loadImage("images/oil.png")
  rings=loadImage("images/rings.png")
  straw1=loadImage("images/straw.png")
  bag2=loadImage("images/obs1.png")
  bottle2=loadImage("images/obs2.png")
  straw2=loadImage("images/obs3.png")

  gameOverImg=loadImage("images/gameOver.jpg")
  restartImg=loadImage("images/reset.png")

  turtleImg=loadAnimation("images/moving_turle.gif")
 blowfishimg=loadAnimation("images/blowfish.gif")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  plasticGroup = new Group();
  
  gameOver=createSprite(displayWidth/2, displayHeight/5,10,50)
  gameOver.addImage("gameover",gameOverImg)
  gameOver.scale=0.7;

  player1=createSprite(200,height/2,50,50);
  player1.addAnimation("turtle", turtleImg);
  player1.scale=0.4;
  player1.visible=true
  
  restart=createSprite(displayWidth/2, displayHeight/2,10,50)
  restart.addImage("gameover",restartImg)
  restart.scale=0.7;

  blowfish = createSprite(200,200,10,10)
  blowfish.addAnimation("blowfish", blowfishimg);
  
  gameOver.visible=false;
 restart.visible=false;


 
}
function draw() {
  background(0,0,0);
  
if(gameState==0){
  gameOver.visible=false;
  restart.visible=false;
}

   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear();   
     game.play();
     player1.visible=true;
    player2.visible=true;

    gameOver.visible=false;
    restart.visible=false;
   }
   if (gameState === 2 ) {
    game.end();

    //restart.visible=false;      

    player1.visible=false;
    player2.visible=false;

    gameOver.visible=true;
    restart.visible=true;

 } 

 drawSprites();
}