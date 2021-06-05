var database;
var gameState;
var game;
var playerCount;
var player;
var form;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();
  console.log("setup");
}

function draw(){
  background("white");
}
