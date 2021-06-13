class Fall {

constructor(){
  this.snowFall =   Matter.Bodies.rectangle(random(1,800), 5, 39, 39) 
 Matter.World.add(w, this.snowFall)
}
display() {

image(snowImage,this.snowFall.position.x,this.snowFall.position.y,39,39)

}




}
    
    




