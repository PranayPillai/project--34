class Hero{
    constructor(x,y,r,angle){
      var options = {
        frictionAir : 1.0,
        density : 1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.image,0,0,this.width,this.height);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
    
    }
}