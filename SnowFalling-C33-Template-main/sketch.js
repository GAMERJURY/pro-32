var snowFalls = []

function preload(){

  sceneImage = loadImage("snow1.jpg");
  snowImage = loadImage("snow4.webp");
  
}
  
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 e = Matter.Engine.create()
 w =  e.world
}


function draw() {
  background(sceneImage);  
  Matter.Engine.update(e)

  if(frameCount%10 === 0 ){
  snowFalls.push(snow1 = new Fall());
 }
 
 for(var i =0;i<snowFalls.length;i =i+1){
   snowFalls[i].display();
 }
  drawSprites();

}