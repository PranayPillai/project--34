class Fly{
    constructor(bodyA,pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 450
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA){
        var A = this.rope.bodyA.position;
        var B = this.pointB;
        push();
        stroke("black");
        strokeWeight(0);
        line(B.x,B.y,A.x,A.y);
        pop();
        }
    }
    attach(body){
        this.rope.bodyA = body;
    }
    fly(){
        this.rope.bodyA = null;
    }
}