class Dustbin{
   constructor(x, y, width, height){
       var options = {
           isStatic : true,
           'restitution' : 0,
           'friction' : 1,
           'density' : 0.3
     }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       this.image = loadImage("Images/dustbingreen.png");
 
       World.add(world, this.body);
 }
    display(){
 
       var pos = this.body.position;
       rectMode(CENTER);
       fill("brown");
       
       
       image(this.image, 925, height-210, 130, 160)
 
    }
  
 
 
 }