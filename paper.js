class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body = Bodies.circle(300, 500, 15, options);
        this.radius = 15;
        this.image = loadImage("Images/paper.png");

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
       image(this.image, pos.x,pos.y-40, 70, 70);
    }
}