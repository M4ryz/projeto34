
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg, background;
var árvore, árvoreImg;
var mangaImg, manga;
var botão, botãoImg;
var árvoreImg, árvore;


function preload(){

  backgroundImg = loadImage("background.jpg");
  mangaImg = loadImage("manga.png");
  botãoImg = loadImage("botão.png");
  árvoreImg = loadImage("árvore.png");
}


function setup() {
  createCanvas(500,500);

  engine = Engine.create();
  world = engine.world;
  
  
  botão = createImg('botão.png');
  botão.position(20,30);
  botão.size(40,40);
  botão.mouseClicked(drop);

  árvore = createSprite(160,340,20,20);
  árvore.scale =0.09;
  árvore.addImage(árvoreImg);

  pedra = createSprite(250,100,20,20);
  pedra.scale =0.09;
  pedra.addImage(pedraImg);

  


}


function draw() 
{
  background(backgroundImg);
  
  Engine.update(engine);
  
  
  
  
  
  
  drawSprites();
}

