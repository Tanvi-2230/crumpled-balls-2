class Ground{
    constructor(){
        var options = {
            isStatic : true,
          }
        this.body = Bodies.rectangle(width/2, height-50, width,15, options);
        this.width = width;
        this.height = 15;

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        
    }

    
}